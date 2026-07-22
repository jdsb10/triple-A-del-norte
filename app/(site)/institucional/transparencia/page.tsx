import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FileDown, FolderOpen } from "lucide-react";

const normas = [
  { titulo: "Resolución CRA 688 de 2014" },
  { titulo: "Resolución CRA 825 de 2017" },
  { titulo: "Resolución CRA 853 de 2018" },
  { titulo: "Metas y estándares de eficiencia (Excel)" },
];

const cartas = [
  "Acueducto y Alcantarillado San Marcos",
  "Acueducto y Alcantarillado Corregimientos San Marcos",
  "Aseo María La Baja",
  "Acueducto y Alcantarillado María La Baja",
];

const indicadores = ["San Marcos, Sucre", "María La Baja, Bolívar"];

function DocList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-brand-100 bg-white p-6">
        <h3 className="mb-4 flex items-center gap-2 font-bold text-ink-900">
          <FolderOpen size={18} className="text-brand-600" /> {title}
        </h3>
        <ul className="divide-y divide-brand-50">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 py-3 text-sm text-ink-600">
              <FileDown size={15} className="shrink-0 text-ink-400" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function TransparenciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Transparencia"
        text="Centralizamos aquí la información y los documentos para que tengas acceso rápido a todos los recursos que necesitas."
      />
      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        <DocList title="Normas y decretos" items={normas.map((n) => n.titulo)} />
        <DocList title="Cartas de compromiso con el usuario (CCU)" items={cartas} />
      </section>
      <section className="container-page pb-20">
        <Reveal>
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <h3 className="mb-4 flex items-center gap-2 font-bold text-ink-900">
              <FolderOpen size={18} className="text-leaf-600" /> Indicadores de control social
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {indicadores.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-leaf-50/60 px-4 py-3 text-sm text-ink-700">
                  <FileDown size={15} className="shrink-0 text-leaf-600" /> {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
