import type { RawDeudor, RawFactura } from "@triple-a/shared";

/**
 * Contrato que debe cumplir cualquier fuente de datos contable del cliente.
 * El sistema contable real aun no esta confirmado, por eso el resto del
 * pipeline (engine.ts, run-sync-job.ts) depende solo de esta interfaz.
 */
export interface AccountingConnector {
  fetchDeudores(since?: Date): Promise<RawDeudor[]>;
  fetchFacturas(since?: Date): Promise<RawFactura[]>;
}

/**
 * Connector de desarrollo: devuelve datos fijos para poder construir y
 * probar el panel de cartera sin depender de accesos externos.
 */
export class MockConnector implements AccountingConnector {
  async fetchDeudores(): Promise<RawDeudor[]> {
    return [
      {
        codigoExterno: "USR-0001",
        nombre: "Maria Fernanda Gomez",
        identificacion: "1067123456",
        telefono: "+573001234567",
        email: "maria.gomez@example.com",
        direccion: "Cra 15 #20-30, Sincelejo",
        saldoActual: 187500,
      },
    ];
  }

  async fetchFacturas(): Promise<RawFactura[]> {
    return [
      {
        codigoExterno: "USR-0001-2026-06",
        deudorCodigoExterno: "USR-0001",
        periodo: "2026-06",
        valor: 187500,
        fechaEmision: "2026-06-01",
        fechaVencimiento: "2026-06-20",
        pagada: false,
        fechaPago: null,
      },
    ];
  }
}
