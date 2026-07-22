import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Target, Eye, HeartHandshake, MapPin } from "lucide-react";
import { municipios } from "@/lib/content";

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Quiénes somos"
        text="Triple A del Norte SAS ESP es la empresa encargada de la gestión de servicios de acueducto, alcantarillado y aseo en varios municipios de la costa Caribe."
      />

      <section className="container-page max-w-3xl py-16 text-ink-600">
        <Reveal>
          <p>
            Con sede principal en la Calle 32 # 119-32, Barrio Venecia, Sincelejo (Sucre), Triple A
            del Norte SAS ESP orienta su gestión hacia la sostenibilidad ambiental y el
            mejoramiento de la calidad de vida de las comunidades donde presta sus servicios,
            incorporando tecnologías modernas e invirtiendo en la recuperación y crecimiento de su
            infraestructura.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-6 pb-16 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-brand-100 bg-white p-8 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <Target size={20} />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink-900">Misión</h2>
            <p className="mt-2 text-ink-500">
              Gestionar los servicios de aguas, alcantarillado y aseo en el territorio nacional
              mediante actividades orientadas hacia la sostenibilidad ambiental y el mejoramiento
              de la calidad de vida.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-brand-100 bg-white p-8 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
              <Eye size={20} />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink-900">Visión</h2>
            <p className="mt-2 text-ink-500">
              Consolidarnos como una empresa de referencia, destacada por su buen trabajo, con la
              calidad, preparación profesional, experiencia y compromiso de nuestro personal como
              pilares fundamentales.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <Reveal>
          <div className="rounded-2xl bg-ink-950 p-8 text-white md:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <HeartHandshake size={20} />
            </span>
            <h2 className="mt-4 text-xl font-bold">Nuestro valor fundamental</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              El desarrollo personal y profesional de nuestros colaboradores es el valor
              fundamental de la organización: lo consideramos esencial para el éxito presente y
              futuro de la empresa.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Cobertura</p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">Municipios donde operamos</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {municipios.map((m, i) => (
            <Reveal key={m.nombre} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-brand-100 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                  <MapPin size={18} />
                </span>
                <h3 className="mt-4 font-bold text-ink-900">{m.nombre}</h3>
                <p className="text-xs text-ink-500">{m.depto} · {m.detalle}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.servicios.map((s) => (
                    <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
