import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FaqAccordion } from "@/components/clientes/faq-accordion";

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Preguntas frecuentes"
        text="Resolvemos las dudas más comunes sobre tu servicio, tu factura y tus deberes como usuario."
      />
      <section className="container-page max-w-3xl py-16">
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </section>
    </>
  );
}
