"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <AnimatePresence mode="wait">
      {status === "idle" ? (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -6 }}
          onSubmit={handleSubmit}
          className="flex gap-2"
        >
          <input
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full min-w-0 rounded-full border border-leaf-200 bg-white px-4 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Suscribirme"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-600 text-white transition-colors hover:bg-leaf-700 active:scale-95"
          >
            <Send size={15} />
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-2 text-sm text-leaf-700"
        >
          <Check size={15} /> ¡Gracias por suscribirte!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
