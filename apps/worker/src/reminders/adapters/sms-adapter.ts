import type { ChannelAdapter, EnvioResult } from "./channel-adapter";
import { Canal } from "@triple-a/db";

/**
 * Pendiente de proveedor definitivo (ej. Twilio SMS). Estructura lista
 * para conectar una vez el cliente confirme el canal de recordatorios.
 */
export class SmsAdapter implements ChannelAdapter {
  canal = Canal.SMS;

  async send(params: { destinatario: string; mensaje: string }): Promise<EnvioResult> {
    if (!process.env.SMS_PROVIDER_API_KEY) {
      return {
        exito: false,
        errorDetalle: "SMS_PROVIDER_API_KEY no configurado - canal pendiente de confirmacion del cliente",
      };
    }

    // TODO: integrar con el proveedor real una vez el cliente confirme el canal.
    return { exito: true, proveedorMessageId: `stub-${Date.now()}` };
  }
}
