import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Leaf, Lightbulb, Megaphone } from "lucide-react";

const lineas = [
  {
    icon: ShieldCheck,
    title: "Transparencia",
    text: "Vinculación proactiva con nuestros grupos de interés para facilitar relaciones de confianza y mutuo beneficio, demostrando que nuestras acciones son visibles y verificables.",
  },
  {
    icon: Leaf,
    title: "Compromiso ambiental",
    text: "Estimulamos el manejo racional de los servicios públicos y la sostenibilidad de los recursos, promoviendo el mejoramiento continuo y una cultura ambiental más allá de los requisitos legales.",
  },
  {
    icon: Lightbulb,
    title: "Enfoque estratégico",
    text: "Impulsamos la innovación y la generación de valor social, económico y ambiental desde nuestro direccionamiento estratégico.",
  },
  {
    icon: Megaphone,
    title: "Publicación",
    text: "Difundimos regularmente nuestras acciones responsables conforme a estándares internacionales de desarrollo sostenible.",
  },
];

export default function RsePage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Responsabilidad Social Empresarial"
        text="Acciones voluntarias que generan valor y sostenibilidad, con transparencia, buscando relaciones de confianza con nuestros grupos de interés."
      />

      <section className="container-page max-w-3xl py-16 text-ink-600">
        <Reveal>
          <p>
            Buscamos crear un sistema integrado que identifique y atienda las preocupaciones
            sociales, laborales, ambientales y de derechos humanos de nuestras comunidades de
            interés, mediante un diálogo constante con ellas. Aspiramos a consolidar nuestra RSE
            como eje central empresarial, alineando indicadores con estándares GRI e implementando
            la norma ISO 26000.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {lineas.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-brand-100 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm text-ink-500">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
