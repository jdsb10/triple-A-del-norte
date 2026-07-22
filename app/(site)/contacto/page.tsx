import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contáctenos"
        title="Atención y servicios a la ciudadanía"
        text="Estamos para atenderte. Cuéntanos tu inquietud y uno de nuestros asesores expertos se pondrá en contacto contigo."
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Ubicación", text: "Cll 32 # 119-32, Barrio Venecia, Sincelejo, Sucre" },
              { icon: Phone, title: "Teléfono", text: "+(5) 2765045" },
              { icon: Mail, title: "Email", text: "calidad@tripleadelnorte.com" },
              { icon: Clock, title: "Horario de atención", text: "Lunes a domingo, 8:00 a.m. - 8:00 p.m." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4">
                <Icon size={20} className="mt-0.5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-ink-900">{title}</p>
                  <p className="text-sm text-ink-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
