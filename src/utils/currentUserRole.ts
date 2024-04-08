import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export const currentUserRole = async () => {
  const session = await getServerSession(authOptions);

  return session?.user?.role;
};
