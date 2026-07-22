import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { MapPin } from "lucide-react";
import { corregimientos } from "@/lib/content";

export default function TarifasCorregimientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Tarifas por corregimientos"
        text="Tarifas de acueducto vigentes para los corregimientos que atendemos, con la misma estructura regulada por la CRA."
      />

      <section className="container-page pb-10">
        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corregimientos.map((c, i) => (
              <div key={c} className="rounded-2xl border border-brand-100 bg-white p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={18} />
                </span>
                <p className="mt-3 font-bold text-ink-900">{c}</p>
                <p className="text-xs text-ink-500">Acueducto 2025</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <h2 className="text-lg font-bold text-ink-900">Estructura tarifaria</h2>
            <p className="mt-2 text-sm text-ink-500">
              Cada corregimiento se factura con las mismas categorías de usuario: Estrato 1 a 4,
              Oficial, Comercial e Industrial, compuestas por cargo fijo, consumo básico,
              complementario y suntuario.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-brand-50/60 p-4">
                <p className="text-xs font-semibold uppercase text-brand-700">Cargo fijo</p>
                <p className="mt-1 text-lg font-bold text-ink-900">$7.175 – $10.800</p>
              </div>
              <div className="rounded-xl bg-brand-50/60 p-4">
                <p className="text-xs font-semibold uppercase text-brand-700">Consumo (m³)</p>
                <p className="mt-1 text-lg font-bold text-ink-900">$1.224 – $5.088</p>
              </div>
              <div className="rounded-xl bg-brand-50/60 p-4">
                <p className="text-xs font-semibold uppercase text-brand-700">Subsidios</p>
                <p className="mt-1 text-lg font-bold text-ink-900">Estrato 1: 55% · Estrato 2: 30%</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-ink-500">
              * Los valores exactos varían por corregimiento y categoría. Consulta con nuestro
              equipo de facturación para el detalle de tu corregimiento.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
