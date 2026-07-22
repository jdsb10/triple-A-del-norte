import { prisma, EstadoSync, EstadoFactura } from "@triple-a/db";
import type { AccountingConnector } from "./connector";

export async function runSyncJob(connector: AccountingConnector) {
  const log = await prisma.syncLog.create({
    data: { estado: EstadoSync.EN_PROGRESO },
  });

  try {
    const deudores = await connector.fetchDeudores();
    const facturas = await connector.fetchFacturas();

    for (const d of deudores) {
      await prisma.deudor.upsert({
        where: { codigoExterno: d.codigoExterno },
        update: {
          nombre: d.nombre,
          identificacion: d.identificacion,
          telefono: d.telefono ?? undefined,
          email: d.email ?? undefined,
          direccion: d.direccion ?? undefined,
          saldoActual: d.saldoActual,
        },
        create: {
          codigoExterno: d.codigoExterno,
          nombre: d.nombre,
          identificacion: d.identificacion,
          telefono: d.telefono ?? undefined,
          email: d.email ?? undefined,
          direccion: d.direccion ?? undefined,
          saldoActual: d.saldoActual,
        },
      });
    }

    for (const f of facturas) {
      const deudor = await prisma.deudor.findUnique({
        where: { codigoExterno: f.deudorCodigoExterno },
      });
      if (!deudor) continue;

      await prisma.factura.upsert({
        where: { codigoExterno: f.codigoExterno },
        update: {
          valor: f.valor,
          estado: f.pagada ? EstadoFactura.PAGADA : EstadoFactura.PENDIENTE,
          fechaPago: f.fechaPago ? new Date(f.fechaPago) : null,
        },
        create: {
          codigoExterno: f.codigoExterno,
          deudorId: deudor.id,
          periodo: f.periodo,
          valor: f.valor,
          fechaEmision: new Date(f.fechaEmision),
          fechaVencimiento: new Date(f.fechaVencimiento),
          estado: f.pagada ? EstadoFactura.PAGADA : EstadoFactura.PENDIENTE,
          fechaPago: f.fechaPago ? new Date(f.fechaPago) : null,
        },
      });
    }

    await prisma.syncLog.update({
      where: { id: log.id },
      data: {
        estado: EstadoSync.EXITOSO,
        finalizadoEn: new Date(),
        registrosProcesados: deudores.length + facturas.length,
      },
    });
  } catch (error) {
    await prisma.syncLog.update({
      where: { id: log.id },
      data: {
        estado: EstadoSync.FALLIDO,
        finalizadoEn: new Date(),
        detalleError: error instanceof Error ? error.message : String(error),
      },
    });
    throw error;
  }
}
