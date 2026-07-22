import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Noticias y actualidad" text="Proyectos, resultados operativos y novedades de Triple A del Norte." />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-shadow hover:shadow-card">
                  <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{post.category}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-500">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.date).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <ArrowRight size={15} className="text-brand-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
