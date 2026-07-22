import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="container-page pt-6 md:pt-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-ink-900 via-brand-900 to-brand-700 px-6 py-16 text-white shadow-card sm:px-10 md:py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {text && <p className="mt-4 max-w-2xl text-lg text-white/75">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
