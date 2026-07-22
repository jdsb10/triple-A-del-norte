import { PageHero } from "@/components/layout/page-hero";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { CoberturaServicio } from "@/components/servicios/cobertura-servicio";

export default function AcueductoPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio de acueducto"
        title="Agua potable de calidad, desde la fuente hasta tu hogar"
        text="Captación del recurso, tratamiento, distribución y comercialización, con fuentes de abastecimiento adaptadas a las características hidrogeológicas de cada municipio."
      />
      <section className="container-page py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink-900">Nuestro proceso</h2>
          <p className="mt-3 max-w-2xl text-ink-500">
            Desde la captación en fuentes hídricas hasta la potabilización en planta y la
            distribución final, cada etapa cuenta con monitoreo continuo de calidad conforme a
            la normatividad vigente.
          </p>
        </Reveal>
        <div className="mt-8 mb-8">
          <FeatureList
            items={[
              "Manejo de sectores hidráulicos para una distribución equilibrada",
              "Operación y construcción de pozos profundos como fuente complementaria",
              "Plantas de potabilización con control de calidad permanente",
              "Mantenimiento preventivo y correctivo de redes de distribución",
              "Diseños de acueducto para nuevos sectores y corregimientos",
              "Atención oportuna de fugas y novedades reportadas por los usuarios",
            ]}
          />
        </div>
        <CoberturaServicio servicio="Acueducto" />
      </section>
    </>
  );
}
