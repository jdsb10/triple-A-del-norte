import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 0.05}>
          <li className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-leaf-600" />
            <span className="text-sm text-ink-700">{item}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
