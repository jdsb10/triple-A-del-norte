import { notFound } from "next/navigation";
import { prisma } from "@triple-a/db";
import { Reveal } from "@/components/ui/reveal";
import { EstadoBadge } from "@/components/panel/estado-badge";
import { Mail, Phone, MapPin } from "lucide-react";

export default async function DeudorDetailPage({ params }: { params: { id: string } }) {
  const deudor = await prisma.deudor.findUnique({
    where: { id: params.id },
    include: {
      facturas: { orderBy: { fechaVencimiento: "desc" } },
      recordatorios: { orderBy: { creadoEn: "desc" }, take: 10 },
    },
  });
  if (!deudor) notFound();

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-ink-900">{deudor.nombre}</h1>
            <p className="mt-1 text-sm text-ink-500">{deudor.identificacion}</p>
          </div>
          <EstadoBadge estado={deudor.estadoCartera} />
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-5 grid gap-3 rounded-2xl border border-brand-100 bg-white p-5 sm:grid-cols-3">
          <p className="flex items-center gap-2 text-sm text-ink-600"><Mail size={15} /> {deudor.email ?? "—"}</p>
          <p className="flex items-center gap-2 text-sm text-ink-600"><Phone size={15} /> {deudor.telefono ?? "—"}</p>
          <p className="flex items-center gap-2 text-sm text-ink-600"><MapPin size={15} /> {deudor.direccion ?? "—"}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 text-lg font-bold text-ink-900">Facturas</h2>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-brand-100 bg-white">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-brand-50/60 text-ink-700">
              <tr>
                <th className="px-5 py-3 font-semibold">Período</th>
                <th className="px-5 py-3 font-semibold">Valor</th>
                <th className="px-5 py-3 font-semibold">Vencimiento</th>
                <th className="px-5 py-3 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {deudor.facturas.map((f) => (
                <tr key={f.id}>
                  <td className="px-5 py-3.5 text-ink-700">{f.periodo}</td>
                  <td className="px-5 py-3.5 font-medium text-ink-900">
                    {Number(f.valor).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })}
                  </td>
                  <td className="px-5 py-3.5 text-ink-600">{f.fechaVencimiento.toLocaleDateString("es-CO")}</td>
                  <td className="px-5 py-3.5"><EstadoBadge estado={f.estado} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <h2 className="mt-8 text-lg font-bold text-ink-900">Historial de recordatorios</h2>
        <div className="mt-3 space-y-2">
          {deudor.recordatorios.length === 0 && (
            <p className="text-sm text-ink-500">Aún no se han enviado recordatorios a este deudor.</p>
          )}
          {deudor.recordatorios.map((r) => (
            <div key={r.id} className="flex items-center justify-between rounded-xl border border-brand-100 bg-white p-4 text-sm">
              <div>
                <p className="font-medium text-ink-900">{r.canal} · {r.enviadoPor ?? "Sistema"}</p>
                <p className="mt-0.5 text-ink-500">{r.creadoEn.toLocaleString("es-CO")}</p>
              </div>
              <EstadoBadge estado={r.estadoEnvio} />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
