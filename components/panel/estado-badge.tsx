const styles: Record<string, string> = {
  AL_DIA: "bg-leaf-50 text-leaf-700",
  MOROSO: "bg-amber-50 text-amber-700",
  SUSPENDIDO: "bg-red-50 text-red-700",
  PENDIENTE: "bg-amber-50 text-amber-700",
  PAGADA: "bg-leaf-50 text-leaf-700",
  VENCIDA: "bg-red-50 text-red-700",
  ENVIADO: "bg-leaf-50 text-leaf-700",
  FALLIDO: "bg-red-50 text-red-700",
};

const labels: Record<string, string> = {
  AL_DIA: "Al día",
  MOROSO: "Moroso",
  SUSPENDIDO: "Suspendido",
  PENDIENTE: "Pendiente",
  PAGADA: "Pagada",
  VENCIDA: "Vencida",
  ENVIADO: "Enviado",
  FALLIDO: "Fallido",
};

export function EstadoBadge({ estado }: { estado: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${styles[estado] ?? "bg-ink-100 text-ink-700"}`}>
      {labels[estado] ?? estado}
    </span>
  );
}
