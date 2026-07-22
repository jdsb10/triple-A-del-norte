import { prisma, EstadoCartera, EstadoEnvio } from "@triple-a/db";
import { Users, AlertTriangle, BellRing, RefreshCcw } from "lucide-react";
import { KpiCard } from "@/components/panel/kpi-card";
import { Reveal } from "@/components/ui/reveal";

export default async function PanelDashboardPage() {
  const [totalDeudores, morosos, deudores, recordatoriosEnviados, ultimoSync] = await Promise.all([
    prisma.deudor.count(),
    prisma.deudor.count({ where: { estadoCartera: EstadoCartera.MOROSO } }),
    prisma.deudor.findMany({ select: { saldoActual: true } }),
    prisma.recordatorio.count({ where: { estadoEnvio: EstadoEnvio.ENVIADO } }),
    prisma.syncLog.findFirst({ orderBy: { iniciadoEn: "desc" } }),
  ]);

  const saldoTotal = deudores.reduce((acc, d) => acc + Number(d.saldoActual), 0);

  return (
    <div>
      <Reveal>
        <h1 className="text-2xl font-bold text-ink-900">Dashboard de cartera</h1>
        <p className="mt-1 text-sm text-ink-500">Resumen general del estado de cartera de los usuarios.</p>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={Users} label="Deudores registrados" value={totalDeudores.toString()} />
        <KpiCard icon={AlertTriangle} label="En mora" value={morosos.toString()} tone="amber" />
        <KpiCard
          icon={RefreshCcw}
          label="Saldo total en cartera"
          value={saldoTotal.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })}
          tone="red"
          delay={0.1}
        />
        <KpiCard icon={BellRing} label="Recordatorios enviados" value={recordatoriosEnviados.toString()} delay={0.15} />
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
          <h2 className="text-sm font-semibold text-ink-900">Última sincronización con contabilidad</h2>
          {ultimoSync ? (
            <p className="mt-2 text-sm text-ink-500">
              {ultimoSync.estado} · {new Date(ultimoSync.iniciadoEn).toLocaleString("es-CO")}
              {ultimoSync.registrosProcesados != null && ` · ${ultimoSync.registrosProcesados} registros procesados`}
            </p>
          ) : (
            <p className="mt-2 text-sm text-ink-500">
              Aún no se ha ejecutado ninguna sincronización. Corre el worker (<code>apps/worker</code>) una vez
              tengamos accesos a la BD contable del cliente.
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
