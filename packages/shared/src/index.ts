import { z } from "zod";

export const rawDeudorSchema = z.object({
  codigoExterno: z.string(),
  nombre: z.string(),
  identificacion: z.string(),
  telefono: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  direccion: z.string().nullable().optional(),
  saldoActual: z.number(),
});
export type RawDeudor = z.infer<typeof rawDeudorSchema>;

export const rawFacturaSchema = z.object({
  codigoExterno: z.string(),
  deudorCodigoExterno: z.string(),
  periodo: z.string(),
  valor: z.number(),
  fechaEmision: z.string(),
  fechaVencimiento: z.string(),
  pagada: z.boolean(),
  fechaPago: z.string().nullable().optional(),
});
export type RawFactura = z.infer<typeof rawFacturaSchema>;

export const pqrFormSchema = z.object({
  nombre: z.string().min(2),
  identificacion: z.string().min(5),
  email: z.string().email(),
  telefono: z.string().min(7),
  tipo: z.enum(["PETICION", "QUEJA", "RECLAMO", "SUGERENCIA"]),
  mensaje: z.string().min(10),
});
export type PqrForm = z.infer<typeof pqrFormSchema>;

export const reportarNovedadSchema = z.object({
  nombre: z.string().min(2),
  telefono: z.string().min(7),
  direccion: z.string().min(5),
  tipoNovedad: z.enum(["FUGA", "DANO_ALCANTARILLADO", "SIN_SERVICIO", "OTRO"]),
  descripcion: z.string().min(10),
});
export type ReportarNovedad = z.infer<typeof reportarNovedadSchema>;
