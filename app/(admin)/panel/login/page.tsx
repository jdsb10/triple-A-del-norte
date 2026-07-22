"use client";

import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, Loader2, ShieldAlert } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function PanelLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    setLoading(false);
    if (result?.error) {
      setError("Credenciales inválidas. Verifica tu correo y contraseña.");
      return;
    }
    router.push("/panel");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-brand-100 bg-white p-8 shadow-card"
      >
        <Logo height={34} />
        <h1 className="mt-5 flex items-center gap-2 text-xl font-bold text-ink-900">
          <Lock size={18} className="text-brand-600" /> Panel de cartera
        </h1>
        <p className="mt-1 text-sm text-ink-500">Acceso exclusivo para el equipo interno de Triple A del Norte.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-700">Correo</label>
            <div className="flex items-center gap-2 rounded-xl border border-brand-200 px-3.5 py-2.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
              <Mail size={16} className="text-ink-500" />
              <input name="email" type="email" required className="w-full text-sm outline-none" placeholder="tu@tripleadelnorte.com" />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-700">Contraseña</label>
            <div className="flex items-center gap-2 rounded-xl border border-brand-200 px-3.5 py-2.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
              <Lock size={16} className="text-ink-500" />
              <input name="password" type="password" required className="w-full text-sm outline-none" />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              <ShieldAlert size={15} /> {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-70"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Ingresar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
