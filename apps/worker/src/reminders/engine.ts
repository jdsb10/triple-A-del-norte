import { prisma, Canal, EstadoEnvio, EstadoFactura } from "@triple-a/db";
import type { ChannelAdapter } from "./adapters/channel-adapter";
import { WhatsappAdapter } from "./adapters/whatsapp-adapter";
import { EmailAdapter } from "./adapters/email-adapter";
import { SmsAdapter } from "./adapters/sms-adapter";

const adapters: Record<Canal, ChannelAdapter> = {
  [Canal.WHATSAPP]: new WhatsappAdapter(),
  [Canal.EMAIL]: new EmailAdapter(),
  [Canal.SMS]: new SmsAdapter(),
};

function renderPlantilla(plantilla: string, vars: Record<string, string>) {
  return plantilla.replace(/{{(\w+)}}/g, (_, key) => vars[key] ?? "");
}

function diasEntre(a: Date, b: Date) {
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.round((a.getTime() - b.getTime()) / msPorDia);
}

export async function runReminderEngine() {
  const reglas = await prisma.reglaRecordatorio.findMany({ where: { activa: true } });
  const facturas = await prisma.factura.findMany({
    where: { estado: { in: [EstadoFactura.PENDIENTE, EstadoFactura.VENCIDA] } },
    include: { deudor: true },
  });

  const hoy = new Date();
  let enviados = 0;

  for (const factura of facturas) {
    for (const regla of reglas) {
      const diasHastaVencimiento = diasEntre(factura.fechaVencimiento, hoy) * -1;
      if (diasHastaVencimiento !== regla.diasOffset) continue;

      const destinatario =
        regla.canal === Canal.EMAIL ? factura.deudor.email : factura.deudor.telefono;
      if (!destinatario) continue;

      const mensaje = renderPlantilla(regla.plantillaMensaje, {
        nombre: factura.deudor.nombre,
        valor: factura.valor.toString(),
        fechaVencimiento: factura.fechaVencimiento.toLocaleDateString("es-CO"),
      });

      const adapter = adapters[regla.canal as Canal];
      const resultado = await adapter.send({ destinatario, mensaje });

      await prisma.recordatorio.create({
        data: {
          deudorId: factura.deudorId,
          facturaId: factura.id,
          reglaId: regla.id,
          canal: regla.canal,
          mensajeEnviado: mensaje,
          estadoEnvio: resultado.exito ? EstadoEnvio.ENVIADO : EstadoEnvio.FALLIDO,
          enviadoPor: "SISTEMA",
          respuestaProveedor: JSON.stringify(resultado),
        },
      });

      if (resultado.exito) enviados++;
    }
  }

  return { enviados };
}
