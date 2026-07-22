import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CreditCard, MapPin, FileText, Download } from "lucide-react";
import { municipios } from "@/lib/content";

export default function FacturacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Facturación y pagos"
        text="Paga tu factura en línea de forma segura o consulta los puntos de pago físicos disponibles en cada municipio."
      />
      <section className="container-page py-16 space-y-14">
        <Reveal>
          <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-8 text-center">
            <CreditCard size={28} className="mx-auto text-brand-700" />
            <h2 className="mt-4 text-2xl font-bold text-ink-900">Pagos electrónicos PSE</h2>
            <p className="mx-auto mt-2 max-w-lg text-ink-500">
              Paga tu factura de forma segura desde tu banco, las 24 horas del día.
            </p>
            <Button className="mt-6">Ir a pagar por PSE</Button>
          </div>
        </Reveal>

        <Reveal>
          <div id="puntos-de-pago">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
              <MapPin size={22} className="text-brand-600" /> Puntos de pago por municipio
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {municipios.map((m) => (
                <li key={m.nombre} className="rounded-xl border border-brand-100 bg-white p-4 text-sm text-ink-700">
                  <p className="font-semibold text-ink-900">{m.nombre}</p>
                  <p className="text-xs text-ink-500">{m.detalle}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
              <FileText size={22} className="text-brand-600" /> Conoce tu factura
            </h2>
            <p className="mt-3 max-w-2xl text-ink-500">
              Tu factura incluye el consumo del período, el valor por cada servicio (acueducto,
              alcantarillado y aseo), la fecha límite de pago y el histórico de consumo.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="secondary">
                <Download size={16} /> Descargar factura de ejemplo
              </Button>
              <Button href="/contacto" variant="ghost">
                ¿Tienes dudas? Contáctanos
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
