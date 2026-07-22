import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { municipios } from "@/lib/content";

export function AboutSection() {
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-card sm:h-96">
              <Image
                src="/images/brand/equipo-triplea.webp"
                alt="Equipo técnico de Triple A del Norte en campo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 h-36 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-right-10 sm:h-44 sm:w-36">
              <Image
                src="/images/brand/intro2.jpg"
                alt="Planta de tratamiento de Triple A del Norte"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="absolute -left-6 -top-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                <MapPin size={20} />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-ink-900">{municipios.length} municipios</p>
                <p className="text-xs text-ink-500">Sucre y Bolívar</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">¿Quiénes somos?</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
            Compromiso y responsabilidad social
          </h2>
          <p className="mt-5 text-ink-500">
            Triple A del Norte SAS ESP, con sede administrativa en Sincelejo (Sucre), gestiona
            servicios de acueducto, alcantarillado y aseo en los municipios de San Marcos, María La
            Baja (Bolívar) y San Onofre. Trabajamos en armonía con nuestro entorno para garantizar
            cobertura, calidad y continuidad a miles de hogares y empresas de la región.
          </p>
          <p className="mt-4 text-ink-500">
            Nuestros equipos técnicos operan en campo todos los días, desde la potabilización del
            agua hasta la recolección de residuos, bajo los más altos estándares regulatorios del
            sector y con la mirada puesta en la sostenibilidad ambiental.
          </p>
          <Button href="/institucional/quienes-somos" variant="secondary" className="mt-6">
            Conocer más de nosotros <ArrowRight size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
