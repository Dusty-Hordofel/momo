"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Social = () => {
  const callbackUrl = "/dashboard/user/files";
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => signIn("google", { callbackUrl })}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      {/* <Button size="lg" className="w-full" variant="outline">
        <FaGithub className="h-5 w-5" />
      </Button> */}
    </div>
  );
};
