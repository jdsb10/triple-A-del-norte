"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const WORDMARK = "TRIPLE A DEL NORTE";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/images/brand/logo-icon.png" alt="Triple A del Norte" width={72} height={64} priority />
          </motion.div>

          <motion.p
            className="mt-4 flex text-sm font-bold tracking-[0.2em] text-ink-300"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045, delayChildren: 0.35 } },
            }}
          >
            {WORDMARK.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { color: "#d1d3e0" },
                  visible: { color: "#14415e" },
                }}
                transition={{ duration: 0.2 }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.p>

          <div className="relative mt-8 h-1.5 w-64 max-w-[70vw] overflow-hidden rounded-full bg-brand-100">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-500 to-leaf-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
