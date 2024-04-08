import { SideNav } from "./side-nav";

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto pt-12 min-h-screen">
      <div className="flex gap-x-20 flex-col">
        <SideNav />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
