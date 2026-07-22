import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { municipios } from "@/lib/content";

export function CoberturaServicio({ servicio }: { servicio: string }) {
  const cubiertos = municipios.filter((m) => m.servicios.includes(servicio));

  return (
    <Reveal delay={0.15}>
      <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
        <p className="text-sm font-semibold text-ink-900">Cobertura de este servicio</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {cubiertos.map((m) => (
            <span key={m.nombre} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <MapPin size={12} /> {m.nombre}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
