import { PageHero } from "@/components/layout/page-hero";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { CoberturaServicio } from "@/components/servicios/cobertura-servicio";

export default function AlcantarilladoPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio de alcantarillado"
        title="Saneamiento responsable para ciudades más saludables"
        text="Manejo de aguas residuales y depuración en nuestras EDAR, mediante sistemas de alcantarillado separativo que atienden únicamente aguas servidas."
      />
      <section className="container-page py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink-900">Infraestructura que mantenemos</h2>
          <p className="mt-3 max-w-2xl text-ink-500">
            Operamos estaciones de rebombeo y plantas de tratamiento de aguas residuales
            domésticas (EDAR), además de la red de alcantarillado que conecta a cada usuario.
          </p>
        </Reveal>
        <div className="mt-8 mb-8">
          <FeatureList
            items={[
              "Mantenimiento preventivo y correctivo de redes de alcantarillado",
              "Operación de estaciones de rebombeo de aguas residuales",
              "Tratamiento de aguas residuales domésticas antes de su vertimiento",
              "Atención oportuna a novedades reportadas en la red",
              "Diseños de alcantarillado para zonas en expansión",
              "Cumplimiento del marco regulatorio ambiental vigente",
            ]}
          />
        </div>
        <CoberturaServicio servicio="Alcantarillado" />
      </section>
    </>
  );
}
