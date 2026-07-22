"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { portafolioItems } from "@/lib/content";

const images = [
  "/images/brand/hero-slide-1.webp",
  "/images/brand/intro2.jpg",
  "/images/brand/hero-slide-2.webp",
];

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Proyectos e infraestructura"
        text="Conoce la infraestructura y los proyectos que hacen posible la prestación de nuestros servicios en cada municipio."
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portafolioItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Link href={`/portafolio/${item.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition-shadow hover:shadow-card">
                  <div className="relative h-40 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={images[i % images.length]}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 90vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-500">{item.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      Ver detalle <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
