"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Waves, Trash2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: Droplets,
    title: "Acueducto",
    text: "Captación, tratamiento y distribución de agua potable con monitoreo constante de calidad.",
    href: "/servicios/acueducto",
  },
  {
    icon: Waves,
    title: "Alcantarillado",
    text: "Recolección y tratamiento de aguas residuales, mantenimiento de redes y estaciones de rebombeo.",
    href: "/servicios/alcantarillado",
  },
  {
    icon: Trash2,
    title: "Aseo",
    text: "Barrido de vías, recolección domiciliaria y disposición final responsable de residuos.",
    href: "/servicios/aseo",
  },
];

export function ServicesSection() {
  return (
    <section className="container-page py-16">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Nuestros servicios
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
            Todo lo que necesitas para vivir con servicios públicos de calidad
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, text, href }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <Link href={href} className="group block h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm transition-shadow group-hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Conocer más
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </motion.div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
