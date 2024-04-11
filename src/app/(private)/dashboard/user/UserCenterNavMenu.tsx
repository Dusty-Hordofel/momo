"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function UserCenterNavMenu() {
  const pathname = usePathname();

  return (
    <div className="lg:flex lg:justify-between items-center  border-b border-gray-400   py-10 mb-10 grid md:grid-cols-2 gap-5">
      <Link
        href="/dashboard/user/files"
        className={clsx("flex items-center justify-center gap-2 relative ")}
        // scroll={false}
      >
        <span
          className={clsx(
            pathname === "/dashboard/user/files"
              ? "font-bold text-4xl"
              : "text-3xl font-normal"
          )}
        >
          Mes fichiers
        </span>
      </Link>
      <Link
        href="/dashboard/user/center"
        className={cn("flex items-center justify-center gap-2 relative ")}
        // scroll={false}
      >
        <span
          className={clsx(
            pathname === "/dashboard/user/center"
              ? "font-bold text-4xl"
              : "text-3xl font-normal text-black/55"
          )}
        >
          {" "}
          Mon centre
        </span>
      </Link>

      <Link
        href="/dashboard/user/center/message"
        className={cn("flex items-center justify-center gap-2 relative ")}
        // scroll={false}
      >
        <span
          className={clsx(
            pathname === "/dashboard/user/center/message"
              ? "font-bold text-4xl"
              : "text-3xl font-normal text-black/55 "
          )}
        >
          Ma messagerie
        </span>
      </Link>

      <Link
        href="/dashboard/user/center/notifications"
        className={clsx("flex items-center justify-center gap-2 relative")}
        // scroll={false}
      >
        <span
          className={clsx(
            pathname === "/dashboard/user/center/notifications"
              ? "font-bold text-4xl"
              : "text-3xl font-normal text-black/55"
          )}
        >
          {" "}
          Mes notifications
        </span>
      </Link>
    </div>
  );
}
