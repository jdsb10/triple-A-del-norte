import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { dmSans } from "@/lib/fonts";
import { SplashScreen } from "@/components/layout/splash-screen";

export const metadata: Metadata = {
  title: "Panel de cartera | Triple A del Norte",
  description: "Panel administrativo interno de control de cartera.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="font-sans">
        <NextTopLoader color="#0986C7" height={3} showSpinner={false} />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
