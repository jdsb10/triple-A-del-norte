import type { ChannelAdapter, EnvioResult } from "./channel-adapter";
import { Canal } from "@triple-a/db";

/**
 * Pendiente de credenciales del cliente (WhatsApp Business API via Meta Cloud
 * API o un BSP como Twilio). Hasta entonces retorna un resultado simulado
 * para no bloquear el desarrollo del engine ni del panel.
 */
export class WhatsappAdapter implements ChannelAdapter {
  canal = Canal.WHATSAPP;

  async send(params: { destinatario: string; mensaje: string }): Promise<EnvioResult> {
    if (!process.env.WHATSAPP_API_TOKEN) {
      return {
        exito: false,
        errorDetalle: "WHATSAPP_API_TOKEN no configurado - canal pendiente de confirmacion del cliente",
      };
    }

    // TODO: integrar con el proveedor real una vez el cliente confirme el canal.
    return { exito: true, proveedorMessageId: `stub-${Date.now()}` };
  }
}
