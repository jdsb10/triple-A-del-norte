"use client";

import { motion } from "framer-motion";
import { CreditCard, HelpCircle, Receipt, Landmark } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: CreditCard,
    label: "Pagos electrónicos",
    text: "Paga tu factura en línea de forma segura por PSE.",
    href: "/clientes/facturacion",
  },
  {
    icon: Receipt,
    label: "Tarifas 2025",
    text: "Consulta los valores vigentes por municipio y estrato.",
    href: "/clientes/tarifas",
  },
  {
    icon: HelpCircle,
    label: "Preguntas frecuentes",
    text: "Resuelve tus dudas sobre facturación y servicio.",
    href: "/clientes/preguntas-frecuentes",
  },
  {
    icon: Landmark,
    label: "Transparencia",
    text: "Documentos, normas y cartas de compromiso.",
    href: "/institucional/transparencia",
  },
];

export function QuickAccess() {
  return (
    <section className="container-bleed py-6">
      <div className="rounded-[2rem] bg-brand-900 px-6 py-14 shadow-card sm:px-10 md:py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-leaf-300">Acceso rápido</p>
          <h2 className="mt-2 max-w-md text-2xl font-bold text-white md:text-3xl">
            Todo lo que necesitas, a un clic de distancia
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, text, href }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <Link href={href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700 transition-colors group-hover:bg-leaf-600 group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold text-ink-900">{label}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-ink-500">{text}</p>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
