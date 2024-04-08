// import { authOptions } from "@/utils/next-auth/authOptions";
import { authOptions } from "@/utils/auth/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
