import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { portafolioItems } from "@/lib/content";

const images = [
  "/images/brand/hero-slide-1.webp",
  "/images/brand/intro2.jpg",
  "/images/brand/hero-slide-2.webp",
];

export function generateStaticParams() {
  return portafolioItems.map((item) => ({ slug: item.slug }));
}

export default function PortafolioDetailPage({ params }: { params: { slug: string } }) {
  const index = portafolioItems.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const item = portafolioItems[index];

  return (
    <>
      <PageHero eyebrow="Portafolio" title={item.title} text={item.text} />
      <section className="container-page max-w-3xl py-16">
        <Reveal>
          <div className="relative mb-8 h-72 overflow-hidden rounded-2xl shadow-card sm:h-80">
            <Image src={images[index % images.length]} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 60vw, 90vw" />
          </div>
          <p className="text-ink-600">
            {item.text} Este proyecto forma parte de la estrategia de Triple A del Norte SAS ESP
            para garantizar cobertura, calidad y continuidad en la prestación de sus servicios en
            los municipios que atendemos.
          </p>
        </Reveal>
      </section>
    </>
  );
}
