import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/content";

export function NewsSection() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Actualidad</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
              Entérate: últimas noticias
            </h2>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-brand-700 hover:underline sm:block">
            Ver todas
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.1}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <article className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-6 transition-shadow hover:shadow-card">
                <span className="w-fit rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold text-leaf-700">
                  {post.category}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
                  {post.title}
                </h3>
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
  );
}
