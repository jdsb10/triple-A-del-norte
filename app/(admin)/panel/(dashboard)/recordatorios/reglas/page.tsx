import { prisma } from "@triple-a/db";
import { Reveal } from "@/components/ui/reveal";

export default async function ReglasPage() {
  const reglas = await prisma.reglaRecordatorio.findMany({ orderBy: { diasOffset: "asc" } });

  return (
    <div>
      <Reveal>
        <h1 className="text-2xl font-bold text-ink-900">Reglas de recordatorio</h1>
        <p className="mt-1 text-sm text-ink-500">
          Define cuándo y por qué canal se envían los recordatorios automáticos.
        </p>
      </Reveal>

      <div className="mt-6 space-y-3">
        {reglas.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.06}>
            <div className="flex items-center justify-between rounded-2xl border border-brand-100 bg-white p-5">
              <div>
                <p className="font-semibold text-ink-900">{r.nombre}</p>
                <p className="mt-1 text-sm text-ink-500">
                  {r.diasOffset < 0
                    ? `${Math.abs(r.diasOffset)} días antes del vencimiento`
                    : `${r.diasOffset} días después del vencimiento`}
                  {" · "}Canal: {r.canal}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  r.activa ? "bg-brand-50 text-brand-700" : "bg-ink-100 text-ink-500"
                }`}
              >
                {r.activa ? "Activa" : "Inactiva"}
              </span>
            </div>
          </Reveal>
        ))}
        {reglas.length === 0 && (
          <p className="text-sm text-ink-500">
            Aún no hay reglas configuradas. Corre <code>npm run db:seed</code> para cargar reglas de ejemplo.
          </p>
        )}
      </div>
    </div>
  );
}
