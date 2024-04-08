import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      lastName: string;
      image: string;
      role: "user" | "admin" | "superAdmin" | "centre";
    };
  }
}

// import { UserRole } from "@prisma/client";
// import NextAuth, { type DefaultSession } from "next-auth";

// export type ExtendedUser = DefaultSession["user"] & {
//   role: UserRole;
//   isTwoFactorEnabled: boolean;
//   isOAuth: boolean;
// };

// declare module "next-auth" {
//   interface Session {
//     user: ExtendedUser;
//   }
// }
