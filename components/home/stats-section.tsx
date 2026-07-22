import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: 4, suffix: "", label: "Municipios atendidos" },
  { value: 3, suffix: "", label: "Servicios integrales" },
  { value: 12, suffix: "h", label: "De atención diaria" },
  { value: 7, suffix: "/7", label: "Días a la semana" },
];

export function StatsSection() {
  return (
    <section className="container-bleed py-6">
      <div className="relative overflow-hidden rounded-[2rem] py-20 text-white shadow-card">
        <Image
          src="/images/brand/hero-trabajador.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink-950/80" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-leaf-500/30 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <p className="max-w-xl text-2xl font-bold md:text-3xl">
              Tomamos acción para garantizar servicios de calidad
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="text-3xl font-bold text-leaf-300 md:text-4xl"
                />
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
