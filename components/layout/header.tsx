"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, Mail, MapPin, X, CreditCard, MessageCircle, Lock } from "lucide-react";
import { navItems } from "@/lib/nav";
import { municipios } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [municipioIndex, setMunicipioIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publica la altura real del header (sin scroll) para que el Hero pueda
  // llenar exactamente el resto del viewport en la carga inicial.
  useEffect(() => {
    const publishHeight = () => {
      if (window.scrollY > 24 || !headerRef.current) return;
      document.documentElement.style.setProperty("--header-h", `${headerRef.current.offsetHeight}px`);
    };
    publishHeight();
    window.addEventListener("resize", publishHeight);
    return () => window.removeEventListener("resize", publishHeight);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setMunicipioIndex((i) => (i + 1) % municipios.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Barra de utilidad - se pliega al hacer scroll (siempre montada para evitar parpadeos al subir/bajar) */}
      <motion.div
        animate={{ height: scrolled ? 0 : 36, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="hidden overflow-hidden bg-ink-900 text-white/90 md:block"
      >
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              <span className="relative inline-block h-4 w-32 overflow-hidden align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={municipioIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {municipios[municipioIndex].nombre}, {municipios[municipioIndex].depto}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> +(5) 2765045
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> calidad@tripleadelnorte.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <Link href="/institucional/rse" className="hover:text-white transition-colors">
              Responsabilidad social
            </Link>
            <Link href="/institucional/transparencia" className="hover:text-white transition-colors">
              Transparencia
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Barra principal: flotante y redondeada al hacer scroll */}
      <motion.div
        animate={{
          marginTop: scrolled ? "12px" : "0px",
          borderRadius: scrolled ? 28 : 0,
          boxShadow: scrolled
            ? "0 12px 32px -8px rgba(9, 134, 199, 0.35)"
            : "0 1px 0 rgba(0,0,0,0.03)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="border border-transparent bg-white/95 backdrop-blur-md"
      >
        <motion.div
          animate={{ paddingTop: scrolled ? 8 : 12, paddingBottom: scrolled ? 8 : 12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="container-page flex items-center justify-between gap-6"
        >
          <div className="flex min-w-0 items-center gap-8">
            <Link href="/" className="flex items-center shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Logo height={38} />
              </motion.div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => item.children && setOpenMenu(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-leaf-50 hover:text-leaf-700 focus-ring ${
                        pathname === item.href ? "text-leaf-600" : "text-ink-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-ring">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}

                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-3"
                      >
                        <div className="w-80 rounded-2xl border border-brand-100 bg-white p-2 shadow-card">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                            >
                              <p className="text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="mt-0.5 text-xs text-ink-500">{child.description}</p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/panel/login"
              aria-label="Acceso empleados"
              title="Acceso empleados"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-300 transition-colors hover:bg-ink-50 hover:text-ink-500 focus-ring"
            >
              <Lock size={15} />
            </Link>
            <Button href="/contacto" variant="ghost">
              <MessageCircle size={16} /> Contáctenos
            </Button>
            <Button href="/clientes/facturacion">
              <CreditCard size={16} /> Pagos electrónicos
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-brand-50 lg:hidden focus-ring"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu />
          </button>
        </motion.div>
      </motion.div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-900/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="ml-auto flex h-full w-80 max-w-[85vw] flex-col bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-ink-900">Menú</p>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-50 focus-ring"
                  aria-label="Cerrar menú"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 font-medium text-ink-800 hover:bg-brand-50"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
                        {item.label}
                      </p>
                    )}
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-5 py-2 text-sm text-ink-600 hover:bg-brand-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 pt-4">
                <Button href="/clientes/facturacion">
                  <CreditCard size={16} /> Pagos electrónicos
                </Button>
                <Button href="/contacto" variant="secondary">
                  Contáctenos
                </Button>
                <Link
                  href="/panel/login"
                  onClick={() => setMobileOpen(false)}
                  className="mt-1 flex items-center justify-center gap-1.5 text-xs text-ink-300 transition-colors hover:text-ink-500"
                >
                  <Lock size={12} /> Acceso empleados
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
