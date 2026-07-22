import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Sidebar } from "@/components/panel/sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/panel/login");

  return (
    <div className="flex">
      <Sidebar userName={session.user?.name ?? session.user?.email ?? "Usuario"} />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
