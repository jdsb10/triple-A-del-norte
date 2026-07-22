import { Reveal } from "@/components/ui/reveal";
import type { LucideIcon } from "lucide-react";

export function KpiCard({
  icon: Icon,
  label,
  value,
  tone = "brand",
  delay = 0,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "brand" | "amber" | "red";
  delay?: number;
}) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
  };

  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tones[tone]}`}>
          <Icon size={18} />
        </span>
        <p className="mt-4 text-2xl font-bold text-ink-900">{value}</p>
        <p className="mt-1 text-sm text-ink-500">{label}</p>
      </div>
    </Reveal>
  );
}
