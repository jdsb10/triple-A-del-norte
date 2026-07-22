import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FileDown, Landmark } from "lucide-react";

const documentos = [
  { titulo: "Resolución CRA 688 de 2014" },
  { titulo: "Resolución CRA 825 de 2017" },
  { titulo: "Resolución CRA 853 de 2018" },
  { titulo: "Metas y estándares de eficiencia" },
];

export default function NormativaPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Entidades de control y normatividad vigente"
        text="La Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA) establece las normas que rigen nuestras tarifas y condiciones de prestación del servicio."
      />
      <section className="container-page py-16">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-brand-50/60 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Landmark size={20} />
            </span>
            <div>
              <p className="font-bold text-ink-900">CRA — Comisión de Regulación de Agua Potable y Saneamiento Básico</p>
              <p className="text-sm text-ink-500">Entidad que regula las tarifas y condiciones de los servicios públicos domiciliarios.</p>
            </div>
          </div>

          <div className="divide-y divide-brand-100 rounded-2xl border border-brand-100">
            {documentos.map((doc) => (
              <div key={doc.titulo} className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-3">
                  <FileDown size={18} className="shrink-0 text-brand-600" />
                  <p className="font-medium text-ink-900">{doc.titulo}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-brand-700">Ver documento</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
