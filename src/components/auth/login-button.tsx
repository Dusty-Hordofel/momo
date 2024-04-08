"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }

  return (
    <div className="cursor-pointer h-full" onClick={handleClick}>
      {children}
    </div>
  );
};

export default LoginButton;
