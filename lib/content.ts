export const municipios = [
  { nombre: "San Marcos", depto: "Sucre", detalle: "Cobertura urbana y corregimientos", servicios: ["Acueducto", "Alcantarillado"] },
  { nombre: "María La Baja", depto: "Bolívar", detalle: "Cobertura urbana", servicios: ["Acueducto", "Alcantarillado", "Aseo"] },
  { nombre: "San Onofre", depto: "Sucre", detalle: "Cobertura urbana", servicios: ["Acueducto", "Alcantarillado", "Aseo"] },
];

export const corregimientos = ["Belén", "Buena Vista", "Las Flores", "Palo Alto"];

type TarifaFila = { estrato: string; subsidio: string; cargoFijo: string; basico: string; complementario: string; suntuario: string };

const filasSanMarcosAcueducto: TarifaFila[] = [
  { estrato: "Estrato 1", subsidio: "55%", cargoFijo: "$9.562", basico: "$1.683", complementario: "$3.739", suntuario: "$3.739" },
  { estrato: "Estrato 2", subsidio: "30%", cargoFijo: "$9.562", basico: "$2.617", complementario: "$3.739", suntuario: "$3.739" },
  { estrato: "Estrato 3", subsidio: "0%", cargoFijo: "$9.562", basico: "$3.739", complementario: "$3.739", suntuario: "$3.739" },
  { estrato: "Estrato 4", subsidio: "0%", cargoFijo: "$9.562", basico: "$3.739", complementario: "$3.739", suntuario: "$3.739" },
  { estrato: "Oficial", subsidio: "0%", cargoFijo: "$9.562", basico: "$3.739", complementario: "$3.739", suntuario: "$3.739" },
  { estrato: "Comercial", subsidio: "50%", cargoFijo: "$14.343", basico: "$5.609", complementario: "$5.609", suntuario: "$5.609" },
  { estrato: "Industrial", subsidio: "30%", cargoFijo: "$12.431", basico: "$4.861", complementario: "$4.861", suntuario: "$4.861" },
];

const filasSanMarcosAlcantarillado: TarifaFila[] = [
  { estrato: "Estrato 1", subsidio: "55%", cargoFijo: "$4.389", basico: "$684", complementario: "$1.520", suntuario: "$1.520" },
  { estrato: "Estrato 2", subsidio: "30%", cargoFijo: "$4.389", basico: "$1.064", complementario: "$1.520", suntuario: "$1.520" },
  { estrato: "Estrato 3", subsidio: "0%", cargoFijo: "$4.389", basico: "$1.520", complementario: "$1.520", suntuario: "$1.520" },
  { estrato: "Estrato 4", subsidio: "0%", cargoFijo: "$4.389", basico: "$1.520", complementario: "$1.520", suntuario: "$1.520" },
  { estrato: "Oficial", subsidio: "0%", cargoFijo: "$4.389", basico: "$1.520", complementario: "$1.520", suntuario: "$1.520" },
  { estrato: "Comercial", subsidio: "50%", cargoFijo: "$6.584", basico: "$2.280", complementario: "$2.280", suntuario: "$2.280" },
  { estrato: "Industrial", subsidio: "30%", cargoFijo: "$5.706", basico: "$1.976", complementario: "$1.976", suntuario: "$1.976" },
];

const filasMariaLaBajaAcueducto: TarifaFila[] = [
  { estrato: "Estrato 1", subsidio: "70%", cargoFijo: "$2.833", basico: "$1.009", complementario: "$3.362", suntuario: "$3.362" },
  { estrato: "Estrato 2", subsidio: "40%", cargoFijo: "$5.666", basico: "$2.017", complementario: "$3.362", suntuario: "$3.362" },
  { estrato: "Estrato 3", subsidio: "15%", cargoFijo: "$8.027", basico: "$2.858", complementario: "$3.362", suntuario: "$3.362" },
  { estrato: "Estrato 4", subsidio: "0%", cargoFijo: "$9.444", basico: "$3.362", complementario: "$3.362", suntuario: "$3.362" },
  { estrato: "Oficial", subsidio: "0%", cargoFijo: "$9.444", basico: "$3.362", complementario: "$3.362", suntuario: "$3.362" },
  { estrato: "Comercial", subsidio: "50%", cargoFijo: "$14.166", basico: "$5.043", complementario: "$5.043", suntuario: "$5.043" },
  { estrato: "Industrial", subsidio: "30%", cargoFijo: "$12.277", basico: "$4.371", complementario: "$4.371", suntuario: "$4.371" },
];

const filasMariaLaBajaAlcantarillado: TarifaFila[] = [
  { estrato: "Estrato 1", subsidio: "70%", cargoFijo: "$1.826", basico: "$407", complementario: "$1.357", suntuario: "$1.357" },
  { estrato: "Estrato 2", subsidio: "40%", cargoFijo: "$3.653", basico: "$814", complementario: "$1.357", suntuario: "$1.357" },
  { estrato: "Estrato 3", subsidio: "15%", cargoFijo: "$5.175", basico: "$1.153", complementario: "$1.357", suntuario: "$1.357" },
  { estrato: "Estrato 4", subsidio: "0%", cargoFijo: "$6.088", basico: "$1.357", complementario: "$1.357", suntuario: "$1.357" },
  { estrato: "Oficial", subsidio: "0%", cargoFijo: "$6.088", basico: "$1.357", complementario: "$1.357", suntuario: "$1.357" },
  { estrato: "Comercial", subsidio: "50%", cargoFijo: "$9.132", basico: "$2.036", complementario: "$2.036", suntuario: "$2.036" },
  { estrato: "Industrial", subsidio: "30%", cargoFijo: "$7.914", basico: "$1.764", complementario: "$1.764", suntuario: "$1.764" },
];

export const tarifas2025 = [
  {
    municipio: "San Marcos",
    servicios: [
      { servicio: "Acueducto", filas: filasSanMarcosAcueducto },
      { servicio: "Alcantarillado", filas: filasSanMarcosAlcantarillado },
    ],
  },
  {
    municipio: "María La Baja",
    servicios: [
      { servicio: "Acueducto", filas: filasMariaLaBajaAcueducto },
      { servicio: "Alcantarillado", filas: filasMariaLaBajaAlcantarillado },
    ],
    nota: "El servicio de Aseo en María La Baja aplica desde marzo de 2025, con tarifas residenciales, comerciales, industriales y oficiales entre $8.718 y $43.592 según categoría.",
  },
];

export const preguntasFrecuentes = [
  {
    pregunta: "¿Quién regula las tarifas de los servicios públicos?",
    respuesta: "Las tarifas de los servicios públicos domiciliarios se establecen con base en las normas (resoluciones) que expiden las Comisiones de Regulación.",
  },
  {
    pregunta: "¿Cuál es la Comisión reguladora de servicios públicos?",
    respuesta: "La Comisión Reguladora de Agua Potable y Saneamiento Básico (CRA).",
  },
  {
    pregunta: "¿Cuáles son los deberes del usuario?",
    respuesta: "Dar uso convenido al servicio, permitir las lecturas del medidor, no cometer fraudes, pagar las facturas oportunamente y permitir el mantenimiento del medidor.",
  },
  {
    pregunta: "¿Qué es una acometida?",
    respuesta: "Es la derivación de la red local del servicio respectivo que llega hasta el registro de corte del inmueble.",
  },
  {
    pregunta: "¿Qué es una acometida clandestina o fraudulenta?",
    respuesta: "Es la acometida de acueducto o alcantarillado no autorizada por la empresa prestadora del servicio.",
  },
  {
    pregunta: "¿Qué es la acometida de alcantarillado?",
    respuesta: "Es la derivación de la red local del servicio público que parte de la caja de inspección.",
  },
  {
    pregunta: "¿Por qué aumenta el consumo?",
    respuesta: "Por cambios de hábitos, mayor número de residentes en el hogar, fugas internas, sanitarios defectuosos y almacenamiento en tanques.",
  },
  {
    pregunta: "¿Qué es el cargo fijo y por qué se cobra?",
    respuesta: "Es un cobro que se hace a todos los usuarios de los servicios públicos por la disponibilidad permanente del servicio, independiente del consumo.",
  },
  {
    pregunta: "¿Cómo se factura el servicio de alcantarillado?",
    respuesta: "Se utiliza el consumo de acueducto como base, multiplicado por las tarifas de alcantarillado, más el cargo fijo correspondiente.",
  },
  {
    pregunta: "¿Qué debo hacer para dar un buen uso al alcantarillado?",
    respuesta: "No evacuar grasas, telas, toallas desechables, condones ni arenas por las acometidas de alcantarillado.",
  },
];

export const portafolioItems = [
  {
    slug: "camiones-recolectores",
    title: "Camiones recolectores de basura",
    text: "Equipos de compactación modernos para la recolección domiciliaria y comercial de residuos sólidos.",
  },
  {
    slug: "disenos-acueducto-alcantarillado",
    title: "Diseños de acueducto y alcantarillado",
    text: "Ingeniería de detalle para nuevos sistemas de agua potable y saneamiento en zonas de expansión.",
  },
  {
    slug: "estaciones-rebombeo",
    title: "Estaciones de rebombeo de aguas residuales",
    text: "Infraestructura clave para garantizar el flujo de aguas servidas en zonas de difícil topografía.",
  },
  {
    slug: "sectores-hidraulicos",
    title: "Manejo de sectores hidráulicos",
    text: "Sectorización de la red de acueducto para optimizar presión y reducir pérdidas de agua.",
  },
  {
    slug: "mantenimiento-alcantarillado",
    title: "Mantenimiento de alcantarillado",
    text: "Programas de limpieza y rehabilitación de redes para prevenir obstrucciones y daños.",
  },
  {
    slug: "pozos-profundos",
    title: "Operación y construcción de pozos profundos",
    text: "Desarrollo de infraestructura para extracción de agua potable como fuente complementaria.",
  },
  {
    slug: "tratamiento-aguas-residuales",
    title: "Tratamiento de aguas residuales domésticas",
    text: "Plantas de tratamiento (EDAR) que garantizan vertimientos seguros para el medio ambiente.",
  },
];

export const blogPosts = [
  {
    slug: "santos-entrego-obras-de-alcantarillado",
    category: "Triple A del Norte",
    date: "2025-05-12",
    title: "Santos entregó obras de alcantarillado",
    excerpt: "El expresidente Juan Manuel Santos inauguró las obras de alcantarillado sanitario en María La Baja, Bolívar, uno de los municipios que atendemos.",
    content:
      "El expresidente Juan Manuel Santos entregó oficialmente las obras de alcantarillado sanitario en María La Baja, Bolívar, uno de los municipios donde Triple A del Norte presta sus servicios. Durante el evento anunció que en 14 meses se entregarán también las obras de acueducto, con una inversión superior a los 11.000 millones de pesos. María La Baja cuenta con aproximadamente 37.000 habitantes que se beneficiarán de esta infraestructura. A nivel nacional, este tipo de proyectos ha llevado agua potable a 5 millones de colombianos y saneamiento básico a 5,2 millones.",
  },
  {
    slug: "dia-mundial-control-calidad-agua",
    category: "Calidad del agua",
    date: "2025-09-24",
    title: "Día Mundial del Control de la Calidad del Agua: liderazgo en investigación y excelencia operativa",
    excerpt: "El sector del agua conmemora su compromiso con la calidad hídrica, la innovación científica y el monitoreo en tiempo real.",
    content:
      "En el marco del Día Mundial del Control de la Calidad del Agua, el sector reafirma su compromiso con la calidad hídrica y la innovación científica. Los laboratorios de control de calidad del agua trabajan con acreditaciones como la ISO/IEC 17025:2017 (ONAC e IDEAM), utilizando tecnología de monitoreo en tiempo real y análisis físicos, químicos y microbiológicos permanentes. La excelencia en el control de calidad del agua es el eje central de la operación de acueducto, protegiendo la salud de miles de familias en cada municipio atendido.",
  },
  {
    slug: "aguas-de-sucre-resultados-positivos",
    category: "Región",
    date: "2025-09-24",
    title: "Aguas de Sucre: resultados que avanzan positivamente",
    excerpt: "Avanzan los proyectos de infraestructura hídrica y saneamiento en el departamento de Sucre, con obras que superan el 90% de ejecución.",
    content:
      "El departamento de Sucre continúa avanzando en la ejecución de proyectos de infraestructura hídrica y saneamiento en articulación con la Gobernación. Varias obras superan el 90% de avance: La Solera 1 y 2 en Caimito (96%), Sincé (93%), y proyectos en San Marcos, Morroa, Guaranda, La Unión y San Benito Abad en distintas etapas de ejecución. En Sincelejo, el proyecto Venecia-Los Alpes beneficiará a 7.000 habitantes. Estos avances impactan directamente varios de los municipios donde Triple A del Norte presta sus servicios de acueducto, alcantarillado y aseo.",
  },
];
