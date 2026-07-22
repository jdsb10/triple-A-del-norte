import { PrismaClient } from "@prisma/client";
import { Canal, EstadoFactura, EstadoCartera, RolPanel } from "../index";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

async function main() {
  await prisma.usuarioPanel.upsert({
    where: { email: "admin@tripleadelnorte.com" },
    update: {},
    create: {
      email: "admin@tripleadelnorte.com",
      nombre: "Administrador Cartera",
      rol: RolPanel.ADMIN,
      passwordHash: hashPassword("cambiar-esta-clave"),
    },
  });

  const deudores = [
    {
      codigoExterno: "USR-0001",
      nombre: "Maria Fernanda Gomez",
      identificacion: "1067123456",
      telefono: "+573001234567",
      email: "maria.gomez@example.com",
      direccion: "Cra 15 #20-30, Sincelejo",
      estadoCartera: EstadoCartera.MOROSO,
      saldoActual: 187500,
    },
    {
      codigoExterno: "USR-0002",
      nombre: "Carlos Alberto Perez",
      identificacion: "1067654321",
      telefono: "+573007654321",
      email: "carlos.perez@example.com",
      direccion: "Calle 30 #10-15, Sincelejo",
      estadoCartera: EstadoCartera.AL_DIA,
      saldoActual: 0,
    },
    {
      codigoExterno: "USR-0003",
      nombre: "Luz Dary Martinez",
      identificacion: "1067789012",
      telefono: "+573009876543",
      email: "luz.martinez@example.com",
      direccion: "Barrio La Ford, Sincelejo",
      estadoCartera: EstadoCartera.SUSPENDIDO,
      saldoActual: 412300,
    },
  ];

  for (const d of deudores) {
    const deudor = await prisma.deudor.upsert({
      where: { codigoExterno: d.codigoExterno },
      update: {},
      create: d,
    });

    await prisma.factura.upsert({
      where: { codigoExterno: `${d.codigoExterno}-2026-06` },
      update: {},
      create: {
        codigoExterno: `${d.codigoExterno}-2026-06`,
        deudorId: deudor.id,
        periodo: "2026-06",
        valor: d.saldoActual > 0 ? d.saldoActual : 95000,
        fechaEmision: new Date("2026-06-01"),
        fechaVencimiento: new Date("2026-06-20"),
        estado: d.saldoActual > 0 ? EstadoFactura.VENCIDA : EstadoFactura.PAGADA,
      },
    });
  }

  await prisma.reglaRecordatorio.upsert({
    where: { id: "seed-regla-3-dias-antes" },
    update: {},
    create: {
      id: "seed-regla-3-dias-antes",
      nombre: "Aviso 3 dias antes del vencimiento",
      diasOffset: -3,
      canal: Canal.WHATSAPP,
      plantillaMensaje: "Hola {{nombre}}, tu factura de Triple A del Norte por {{valor}} vence el {{fechaVencimiento}}. Puedes pagarla por PSE en tripleadelnorte.com.",
    },
  });

  await prisma.reglaRecordatorio.upsert({
    where: { id: "seed-regla-5-dias-despues" },
    update: {},
    create: {
      id: "seed-regla-5-dias-despues",
      nombre: "Recordatorio 5 dias despues de vencida",
      diasOffset: 5,
      canal: Canal.EMAIL,
      plantillaMensaje: "Hola {{nombre}}, tu factura por {{valor}} esta vencida desde el {{fechaVencimiento}}. Evita la suspension del servicio pagando hoy.",
    },
  });

  console.log("Seed completado.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
