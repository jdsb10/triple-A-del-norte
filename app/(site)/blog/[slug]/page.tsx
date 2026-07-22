import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} />
      <section className="container-page max-w-3xl py-16">
        <Reveal>
          <span className="flex items-center gap-1.5 text-sm text-ink-500">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">{post.content}</p>
        </Reveal>
      </section>
    </>
  );
}
