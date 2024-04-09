import { currentUser } from "@/utils/auth/currentUser";
import { SideNav } from "./SideNav";
import { currentUserRole } from "@/utils/auth/currentUserRole";
import { redirect } from "next/navigation";
import { Settings2Icon, UserCog, UserCog2, UserCog2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  // const userRole = await currentUserRole();

  // if (!user && userRole !== "user") {
  //   redirect("/auth/login");
  // }
  return (
    <main className="container mx-auto pt-12 overflow-hidden">
      <div className=" h-max py-5 flex flex-col justify-start gap-y-5 border-y border-gray-400">
        <div className="flex justify-end">
          <span>
            {/* <SettingsIcon strokeWidth={1} className="w-10 h-10" /> */}
            <Button variant="ghost">
              <Settings2Icon strokeWidth={0.75} className="w-14 h-12" />
            </Button>
          </span>
        </div>
        <div>
          <h1 className="lg:text-9xl md:text-7xl text-2xl">
            {user?.name
              .split(" ")
              .map((username) => username[0].toUpperCase() + username.slice(1))}
          </h1>
          <div className="flex justify-between items-center mt-2">
            {/* <div className="bg-red-400"> */}
            <picture>
              <img
                className="w-10 h-10"
                src={user?.image}
                alt={`photo de profile de ${user?.name}`}
              />
            </picture>
            {/* </div> */}

            <Button variant="ghost">
              <UserCog strokeWidth={0.75} className="w-7 h-7" />
              {/* <UserCog2Icon strokeWidth={0.75} />
              <UserCog2 strokeWidth={0.75} /> */}
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end items-center py-10">
        <Link href="/dashboard/user/files/add-file">
          <Button className="px-3 py-4 text-base mb-10" size="lg">
            Ajouter un fichier
          </Button>
        </Link>
      </div> */}
      <div className="flex gap-x-20 flex-col">
        <SideNav />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
