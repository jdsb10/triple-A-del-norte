import { prisma } from "@triple-a/db";
import { Reveal } from "@/components/ui/reveal";
import { EstadoBadge } from "@/components/panel/estado-badge";

export default async function RecordatoriosPage() {
  const recordatorios = await prisma.recordatorio.findMany({
    orderBy: { creadoEn: "desc" },
    take: 50,
    include: { deudor: true },
  });

  return (
    <div>
      <Reveal>
        <h1 className="text-2xl font-bold text-ink-900">Historial de recordatorios</h1>
        <p className="mt-1 text-sm text-ink-500">Registro de auditoría de todos los recordatorios enviados.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-100 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-brand-50/60 text-ink-700">
              <tr>
                <th className="px-5 py-3 font-semibold">Deudor</th>
                <th className="px-5 py-3 font-semibold">Canal</th>
                <th className="px-5 py-3 font-semibold">Enviado por</th>
                <th className="px-5 py-3 font-semibold">Estado</th>
                <th className="px-5 py-3 font-semibold">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {recordatorios.map((r) => (
                <tr key={r.id} className="transition-colors hover:bg-brand-50/50">
                  <td className="px-5 py-3.5 font-medium text-ink-900">{r.deudor.nombre}</td>
                  <td className="px-5 py-3.5 text-ink-600">{r.canal}</td>
                  <td className="px-5 py-3.5 text-ink-600">{r.enviadoPor ?? "Sistema"}</td>
                  <td className="px-5 py-3.5"><EstadoBadge estado={r.estadoEnvio} /></td>
                  <td className="px-5 py-3.5 text-ink-500">{r.creadoEn.toLocaleString("es-CO")}</td>
                </tr>
              ))}
              {recordatorios.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-ink-500">
                    Aún no se han enviado recordatorios.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  );
}
