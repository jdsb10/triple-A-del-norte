import Link from "next/link";
import { prisma } from "@triple-a/db";
import { Reveal } from "@/components/ui/reveal";
import { EstadoBadge } from "@/components/panel/estado-badge";

export default async function DeudoresPage() {
  const deudores = await prisma.deudor.findMany({ orderBy: { saldoActual: "desc" } });

  return (
    <div>
      <Reveal>
        <h1 className="text-2xl font-bold text-ink-900">Deudores</h1>
        <p className="mt-1 text-sm text-ink-500">Listado sincronizado desde el sistema contable.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-100 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-brand-50/60 text-ink-700">
              <tr>
                <th className="px-5 py-3 font-semibold">Nombre</th>
                <th className="px-5 py-3 font-semibold">Identificación</th>
                <th className="px-5 py-3 font-semibold">Estado</th>
                <th className="px-5 py-3 font-semibold">Saldo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {deudores.map((d) => (
                <tr key={d.id} className="transition-colors hover:bg-brand-50/50">
                  <td className="px-5 py-3.5">
                    <Link href={`/panel/deudores/${d.id}`} className="font-medium text-ink-900 hover:text-brand-700">
                      {d.nombre}
                    </Link>
                  </td>
                  <td className="px-5 py-3.5 text-ink-600">{d.identificacion}</td>
                  <td className="px-5 py-3.5"><EstadoBadge estado={d.estadoCartera} /></td>
                  <td className="px-5 py-3.5 font-medium text-ink-900">
                    {Number(d.saldoActual).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })}
                  </td>
                </tr>
              ))}
              {deudores.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-ink-500">
                    Aún no hay datos. Corre <code>npm run db:seed</code> para cargar datos de prueba.
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
