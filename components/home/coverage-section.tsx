"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Droplets, Waves, Trash2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { municipios } from "@/lib/content";

const serviceIcon: Record<string, typeof Droplets> = {
  Acueducto: Droplets,
  Alcantarillado: Waves,
  Aseo: Trash2,
};

export function CoverageSection() {
  const [active, setActive] = useState(0);
  const m = municipios[active];

  return (
    <section className="container-page py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Nuestra cobertura</p>
        <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
          Presentes en 3 municipios de la costa Caribe
        </h2>
        <p className="mt-3 max-w-xl text-sm text-ink-500">
          Con alta experiencia en los municipios donde operamos. Nuestra sede administrativa está
          en Sincelejo, Sucre.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex flex-col gap-2">
            {municipios.map((item, i) => (
              <button
                key={item.nombre}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-2xl px-5 py-4 text-left transition-colors ${
                  active === i ? "text-white" : "bg-white text-ink-900 hover:bg-brand-50"
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="municipio-active"
                    className="absolute inset-0 bg-brand-600"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold">
                    <MapPin size={16} /> {item.nombre}
                  </span>
                  <span className={active === i ? "text-white/70" : "text-ink-500"}>{item.depto}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <motion.div
            key={m.nombre}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full rounded-3xl border border-brand-100 bg-white p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-leaf-600">{m.depto}, Colombia</p>
            <h3 className="mt-2 text-2xl font-bold text-ink-900">{m.nombre}</h3>
            <p className="mt-1 text-ink-500">{m.detalle}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {m.servicios.map((s) => {
                const Icon = serviceIcon[s];
                return (
                  <div key={s} className="rounded-xl bg-brand-50/60 p-4 text-center">
                    <Icon size={20} className="mx-auto text-brand-700" />
                    <p className="mt-2 text-sm font-semibold text-ink-900">{s}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
