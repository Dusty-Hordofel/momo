import { currentUser } from "@/utils/auth/currentUser";
import { SideNav } from "../SideNav";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { redirect } from "next/navigation";

export default async function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  const userRole = await currentUserRole();

  if (!user && userRole !== "user") {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col">
      <SideNav />
      <div className="w-full">{children}</div>
    </div>
  );
}
