"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function EmergencyBanner() {
  return (
    <section className="container-page py-12">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-leaf-600 px-6 py-8 text-center shadow-card sm:flex-row sm:text-left md:px-10">
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white"
          >
            <PhoneCall size={24} />
          </motion.span>
          <div className="flex-1">
            <p className="text-lg font-bold text-white">Línea de atención al cliente</p>
            <p className="mt-1 text-sm text-leaf-50">
              Lunes a domingo, de 8:00 a.m. a 8:00 p.m. estamos disponibles para atenderte.{" "}
              <span className="font-semibold">+(5) 2765045</span>
            </p>
          </div>
          <Button href="/contacto" className="!bg-white !text-leaf-700 hover:!bg-leaf-50 shrink-0">
            Contáctanos
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
