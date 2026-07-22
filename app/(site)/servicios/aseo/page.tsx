import { PageHero } from "@/components/layout/page-hero";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { CoberturaServicio } from "@/components/servicios/cobertura-servicio";

export default function AseoPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio de aseo"
        title="Una ciudad más limpia, todos los días"
        text="Barrido, recolección domiciliaria, transporte y disposición final de residuos sólidos, con equipos de compactación modernos."
      />
      <section className="container-page py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink-900">Cobertura del servicio</h2>
          <p className="mt-3 max-w-2xl text-ink-500">
            Programamos rutas de recolección eficientes y mantenemos limpias las vías y espacios
            públicos de cada municipio que atendemos.
          </p>
        </Reveal>
        <div className="mt-8 mb-8">
          <FeatureList
            items={[
              "Barrido manual y mecánico de vías públicas",
              "Recolección domiciliaria de residuos según ruta y horario",
              "Recolección de residuos en el sector comercial",
              "Camiones recolectores con equipos de compactación modernos",
              "Disposición final responsable en sitios autorizados",
              "Campañas de sensibilización sobre manejo de residuos",
            ]}
          />
        </div>
        <CoberturaServicio servicio="Aseo" />
      </section>
    </>
  );
}
