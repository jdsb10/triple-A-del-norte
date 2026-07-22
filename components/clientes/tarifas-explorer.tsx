"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tarifas2025 } from "@/lib/content";

export function TarifasExplorer() {
  const [municipioIdx, setMunicipioIdx] = useState(0);
  const [servicioIdx, setServicioIdx] = useState(0);

  const municipio = tarifas2025[municipioIdx];
  const servicio = municipio.servicios[servicioIdx];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tarifas2025.map((m, i) => (
          <button
            key={m.municipio}
            onClick={() => {
              setMunicipioIdx(i);
              setServicioIdx(0);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              i === municipioIdx ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            {m.municipio}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {municipio.servicios.map((s, i) => (
          <button
            key={s.servicio}
            onClick={() => setServicioIdx(i)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              i === servicioIdx ? "bg-leaf-600 text-white" : "bg-leaf-50 text-leaf-700 hover:bg-leaf-100"
            }`}
          >
            {s.servicio}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${municipioIdx}-${servicioIdx}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6 overflow-x-auto rounded-2xl border border-brand-100 shadow-sm"
        >
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-brand-50 text-ink-700">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Categoría</th>
                <th className="px-5 py-3.5 font-semibold">Subsidio</th>
                <th className="px-5 py-3.5 font-semibold">Cargo fijo</th>
                <th className="px-5 py-3.5 font-semibold">Básico</th>
                <th className="px-5 py-3.5 font-semibold">Complementario</th>
                <th className="px-5 py-3.5 font-semibold">Suntuario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {servicio.filas.map((row) => (
                <tr key={row.estrato} className="transition-colors hover:bg-brand-50/50">
                  <td className="px-5 py-3.5 font-medium text-ink-900">{row.estrato}</td>
                  <td className="px-5 py-3.5 text-ink-600">{row.subsidio}</td>
                  <td className="px-5 py-3.5 text-ink-600">{row.cargoFijo}</td>
                  <td className="px-5 py-3.5 text-ink-600">{row.basico}</td>
                  <td className="px-5 py-3.5 text-ink-600">{row.complementario}</td>
                  <td className="px-5 py-3.5 text-ink-600">{row.suntuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </AnimatePresence>

      {municipio.nota && (
        <p className="mt-4 text-xs text-ink-500">* {municipio.nota}</p>
      )}
    </div>
  );
}
