"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, BellRing, Settings2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "/panel", label: "Dashboard", icon: LayoutDashboard },
  { href: "/panel/deudores", label: "Deudores", icon: Users },
  { href: "/panel/recordatorios", label: "Recordatorios", icon: BellRing },
  { href: "/panel/recordatorios/reglas", label: "Reglas", icon: Settings2 },
];

export function Sidebar({ userName }: { userName: string }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-brand-100 bg-white p-5">
      <div className="px-1">
        <Logo height={30} />
        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
          Panel de cartera
        </p>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative">
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-brand-600"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-ink-600 hover:bg-brand-50"
                }`}
              >
                <link.icon size={17} />
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-brand-100 pt-4">
        <p className="truncate px-1 text-xs text-ink-500">{userName}</p>
        <button
          onClick={() => signOut({ callbackUrl: "/panel/login" })}
          className="mt-2 flex w-full items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={16} /> Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
