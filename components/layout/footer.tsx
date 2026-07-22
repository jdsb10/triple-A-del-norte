import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Lock } from "lucide-react";
import { NewsletterForm } from "@/components/home/newsletter-form";
import { Logo } from "@/components/ui/logo";
import { municipios } from "@/lib/content";

export function Footer() {
  return (
    <footer className="container-page py-6">
      <div className="grid gap-10 rounded-[2rem] bg-leaf-50 p-8 shadow-card md:grid-cols-2 md:p-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo height={34} />
          <p className="mt-4 text-sm text-ink-500">
            Triple A del Norte SAS ESP presta servicios de acueducto, alcantarillado y aseo con
            calidad y continuidad para miles de hogares y empresas.
          </p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-ink-600">
            {municipios.map((m) => (
              <li key={m.nombre} className="flex items-center gap-1.5">
                <MapPin size={13} className="shrink-0 text-leaf-600" /> {m.nombre}
              </li>
            ))}
          </ul>
          <a
            href="tel:+525765045"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-leaf-600 px-5 py-3 text-white shadow-sm transition-colors hover:bg-leaf-700"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <Phone size={15} />
            </span>
            <span className="leading-tight">
              <span className="block text-xs text-leaf-100">Soporte de llamadas</span>
              <span className="block text-sm font-bold">+(5) 2765045</span>
            </span>
          </a>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-600 shadow-sm transition-colors hover:bg-leaf-600 hover:text-white"
                aria-label="Red social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-900">Servicios</p>
          <ul className="space-y-2.5 text-sm text-ink-500">
            <li><Link href="/servicios/acueducto" className="hover:text-leaf-700 transition-colors">Acueducto</Link></li>
            <li><Link href="/servicios/alcantarillado" className="hover:text-leaf-700 transition-colors">Alcantarillado</Link></li>
            <li><Link href="/servicios/aseo" className="hover:text-leaf-700 transition-colors">Aseo</Link></li>
            <li><Link href="/portafolio" className="hover:text-leaf-700 transition-colors">Portafolio</Link></li>
            <li><Link href="/blog" className="hover:text-leaf-700 transition-colors">Entérate</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-900">Clientes</p>
          <ul className="space-y-2.5 text-sm text-ink-500">
            <li><Link href="/clientes/tarifas" className="hover:text-leaf-700 transition-colors">Tarifas 2025</Link></li>
            <li><Link href="/clientes/tarifas-corregimientos" className="hover:text-leaf-700 transition-colors">Tarifas por corregimientos</Link></li>
            <li><Link href="/clientes/facturacion" className="hover:text-leaf-700 transition-colors">Facturación y PSE</Link></li>
            <li><Link href="/clientes/normativa" className="hover:text-leaf-700 transition-colors">Entidades de control</Link></li>
            <li><Link href="/clientes/preguntas-frecuentes" className="hover:text-leaf-700 transition-colors">Preguntas frecuentes</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-ink-900">Contacto</p>
          <ul className="space-y-2.5 text-sm text-ink-500">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-leaf-600" /> Cll 32 # 119-32, Barrio Venecia, Sincelejo, Sucre</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-leaf-600" /> +(5) 2765045</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-leaf-600" /> calidad@tripleadelnorte.com</li>
            <li className="flex items-center gap-2"><Clock size={14} className="text-leaf-600" /> Lunes a domingo, 8:00 a.m. - 8:00 p.m.</li>
          </ul>
          <p className="mb-2 mt-5 text-sm font-semibold text-ink-900">Boletín informativo</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 border-t border-ink-100 pt-5 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Triple A del Norte SAS ESP. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <Link href="/institucional/transparencia" className="hover:text-leaf-700 transition-colors">
            Transparencia
          </Link>
          <Link href="/institucional/quienes-somos" className="hover:text-leaf-700 transition-colors">
            Institucional
          </Link>
          <Link href="/panel/login" className="flex items-center gap-1.5 hover:text-leaf-700 transition-colors">
            <Lock size={12} /> Acceso empleados
          </Link>
        </div>
      </div>
    </footer>
  );
}
