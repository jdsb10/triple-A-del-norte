import type { Canal } from "@triple-a/db";

export interface EnvioResult {
  exito: boolean;
  proveedorMessageId?: string;
  errorDetalle?: string;
}

export interface ChannelAdapter {
  canal: Canal;
  send(params: {
    destinatario: string;
    mensaje: string;
    contexto?: Record<string, unknown>;
  }): Promise<EnvioResult>;
}
