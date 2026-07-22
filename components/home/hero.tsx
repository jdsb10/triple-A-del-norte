"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    tag: "Compromiso y responsabilidad social",
    title: "Armonía con su entorno, cada día",
    text: "Mantenemos y ampliamos la red de acueducto y alcantarillado con equipos técnicos en campo, garantizando continuidad del servicio para toda la comunidad.",
    image: "/images/brand/hero-slide-1.webp",
  },
  {
    tag: "Ciudad limpia",
    title: "Aseo y recolección puntual, todos los días",
    text: "Barrido, recolección domiciliaria y disposición final responsable en toda nuestra área de cobertura, con personal comprometido en cada ruta.",
    image: "/images/brand/hero-slide-2.webp",
  },
  {
    tag: "Calidad garantizada",
    title: "Plantas de tratamiento con monitoreo constante",
    text: "Cada etapa del proceso de potabilización cumple los más altos estándares regulatorios, cuidando la salud de miles de hogares.",
    image: "/images/brand/intro2.jpg",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="container-page pt-6 md:pt-8">
      <div className="relative h-[560px] overflow-hidden rounded-[2rem] shadow-card md:h-[620px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-30% via-ink-950/55 to-60% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full items-end p-8 md:items-center md:p-14">
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold tracking-wide text-leaf-700 shadow-sm">
                  <Droplets size={13} /> {slides[index].tag}
                </span>
                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  {slides[index].title}
                </h1>
                <p className="mt-5 max-w-lg text-lg text-white/85">{slides[index].text}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/clientes/facturacion" className="!bg-white !text-brand-800 hover:!bg-brand-50">
                Pagar mi factura <ArrowRight size={16} />
              </Button>
              <Button href="/servicios/acueducto" variant="secondary" className="!border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
                Conocer nuestros servicios
              </Button>
            </div>

            <div className="mt-10 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className="h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
                >
                  {i === index && (
                    <motion.div
                      key={index}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6.5, ease: "linear" }}
                      className="h-full bg-white"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
