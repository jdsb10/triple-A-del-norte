import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { dmSans } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SplashScreen } from "@/components/layout/splash-screen";

export const metadata: Metadata = {
  title: "Triple A del Norte | Acueducto, Alcantarillado y Aseo",
  description:
    "Garantizamos servicios de acueducto, alcantarillado y aseo de excelente calidad para Sincelejo y la región Caribe.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <NextTopLoader color="#0986C7" height={3} showSpinner={false} shadow="0 0 10px #0986C7,0 0 5px #0986C7" />
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
