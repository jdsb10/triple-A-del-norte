import { PrismaClient } from "@prisma/client";

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

export const prisma = globalThis.prismaGlobal ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export * from "@prisma/client";

// SQLite no soporta enums nativos en Prisma; los campos correspondientes se
// guardan como String y se validan en la aplicación con estas constantes.
export const EstadoCartera = {
  AL_DIA: "AL_DIA",
  MOROSO: "MOROSO",
  SUSPENDIDO: "SUSPENDIDO",
} as const;
export type EstadoCartera = (typeof EstadoCartera)[keyof typeof EstadoCartera];

export const EstadoFactura = {
  PENDIENTE: "PENDIENTE",
  PAGADA: "PAGADA",
  VENCIDA: "VENCIDA",
} as const;
export type EstadoFactura = (typeof EstadoFactura)[keyof typeof EstadoFactura];

export const Canal = {
  WHATSAPP: "WHATSAPP",
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;
export type Canal = (typeof Canal)[keyof typeof Canal];

export const EstadoEnvio = {
  ENVIADO: "ENVIADO",
  FALLIDO: "FALLIDO",
  PENDIENTE: "PENDIENTE",
} as const;
export type EstadoEnvio = (typeof EstadoEnvio)[keyof typeof EstadoEnvio];

export const EstadoSync = {
  EXITOSO: "EXITOSO",
  FALLIDO: "FALLIDO",
  EN_PROGRESO: "EN_PROGRESO",
} as const;
export type EstadoSync = (typeof EstadoSync)[keyof typeof EstadoSync];

export const RolPanel = {
  ADMIN: "ADMIN",
  CARTERA: "CARTERA",
  SOLO_LECTURA: "SOLO_LECTURA",
} as const;
export type RolPanel = (typeof RolPanel)[keyof typeof RolPanel];
