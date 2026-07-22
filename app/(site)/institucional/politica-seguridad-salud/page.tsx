import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FeatureList } from "@/components/ui/feature-list";

export default function PoliticaSeguridadSaludPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Política de seguridad y salud en el trabajo"
        text="Estamos comprometidos con el mejoramiento continuo de nuestro Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)."
      />
      <section className="container-page max-w-3xl py-16 text-ink-600">
        <Reveal>
          <p>
            En Triple A del Norte SAS ESP nos dedicamos a proteger la salud de todo nuestro
            personal, incluyendo contratistas y subcontratistas, manteniendo su integridad física
            y mental como prioridad de nuestra operación.
          </p>
        </Reveal>
      </section>
      <section className="container-page pb-20">
        <Reveal delay={0.1}>
          <h2 className="mb-6 text-xl font-bold text-ink-900">Nuestros compromisos</h2>
        </Reveal>
        <FeatureList
          items={[
            "Identificar peligros, evaluar riesgos y establecer los controles correspondientes",
            "Mejorar continuamente el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)",
            "Cumplir la normativa colombiana vigente y nuestras obligaciones voluntarias",
            "Implementar programas de promoción de la salud orientados al bienestar de los empleados",
            "Desarrollar formación, entrenamiento y capacitación permanente",
            "Cultivar una cultura de seguridad laboral en toda la organización",
          ]}
        />
      </section>
    </>
  );
}
