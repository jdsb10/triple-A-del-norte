export type NavLink = { label: string; href: string; description?: string };
export type NavItem = { label: string; href?: string; children?: NavLink[] };

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    children: [
      { label: "Acueducto", href: "/servicios/acueducto", description: "Captación, tratamiento, distribución y comercialización" },
      { label: "Alcantarillado", href: "/servicios/alcantarillado", description: "Manejo de aguas residuales y depuración en EDAR" },
      { label: "Aseo", href: "/servicios/aseo", description: "Barrido, recolección, transporte y disposición final" },
    ],
  },
  {
    label: "Institucional",
    children: [
      { label: "Quiénes somos", href: "/institucional/quienes-somos", description: "Misión, visión y valores de Triple A del Norte SAS ESP" },
      { label: "Seguridad y salud en el trabajo", href: "/institucional/politica-seguridad-salud", description: "Nuestro Sistema de Gestión SG-SST" },
      { label: "Responsabilidad social", href: "/institucional/rse", description: "Líneas de acción de nuestra RSE" },
      { label: "Transparencia", href: "/institucional/transparencia", description: "Documentos, normas y cartas de compromiso" },
    ],
  },
  {
    label: "Clientes",
    children: [
      { label: "Tarifas 2025", href: "/clientes/tarifas", description: "Tarifas vigentes por municipio y estrato" },
      { label: "Tarifas por corregimientos", href: "/clientes/tarifas-corregimientos", description: "Belén, Buena Vista, Las Flores y Palo Alto" },
      { label: "Facturación", href: "/clientes/facturacion", description: "Conoce tu factura y cómo pagarla" },
      { label: "Entidades de control y normatividad", href: "/clientes/normativa", description: "Resoluciones CRA y marco regulatorio" },
      { label: "Preguntas frecuentes", href: "/clientes/preguntas-frecuentes", description: "Dudas comunes sobre tu servicio" },
    ],
  },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Entérate", href: "/blog" },
  { label: "Contáctenos", href: "/contacto" },
];
