import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TarifasExplorer } from "@/components/clientes/tarifas-explorer";

export default function TarifasPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Tarifas 2025"
        text="Consulta las tarifas vigentes por municipio, servicio y categoría de usuario, reguladas por la Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA)."
      />
      <section className="container-page py-16">
        <Reveal>
          <TarifasExplorer />
        </Reveal>
      </section>
    </>
  );
}
