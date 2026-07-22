import cron from "node-cron";
import { runSyncJob } from "./sync/run-sync-job";
import { MockConnector } from "./sync/connector";
import { runReminderEngine } from "./reminders/engine";

const connector = new MockConnector();

async function syncAndLog() {
  console.log(`[${new Date().toISOString()}] Iniciando sync de cartera...`);
  try {
    await runSyncJob(connector);
    console.log("Sync completado.");
  } catch (error) {
    console.error("Sync fallido:", error);
  }
}

async function remindersAndLog() {
  console.log(`[${new Date().toISOString()}] Evaluando reglas de recordatorio...`);
  try {
    const { enviados } = await runReminderEngine();
    console.log(`Recordatorios enviados: ${enviados}`);
  } catch (error) {
    console.error("Envio de recordatorios fallido:", error);
  }
}

// Sync nocturno (2am) y evaluacion de recordatorios cada mañana (8am).
cron.schedule("0 2 * * *", syncAndLog);
cron.schedule("0 8 * * *", remindersAndLog);

console.log("Worker de cartera Triple A del Norte iniciado. Esperando horarios programados...");

if (process.env.RUN_ON_START === "true") {
  syncAndLog().then(remindersAndLog);
}
