import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import clientPromise from "@/lib/MongoDBAdapter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import User from "@/models/userModel";
import connectDB from "@/config/database";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        connectDB();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Aucun utilisateur trouvé avec cet email");
        }

        // If the user has no password (i.e., they signed up via a social network), throw an error
        if (!user.password) {
          throw new Error("Veuillez vous connecter avec Google");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error(
            "Mot de passe incorrect. Veuillez réessayer avec le bon mot de passe"
          );
        }

        return user;
      },
    }),
  ],
  callbacks: {
    // async signIn({ user }) {
    //   connectDB();

    //   const { email } = user;

    //   // Try to find a user with the provided email
    //   let dbUser = await User.findOne({ email });

    //   // If the user doesn't exist, create a new one
    //   if (!dbUser) {
    //     dbUser = await User.create({
    //       email,
    //       name: user.name,
    //       image: user.image,
    //     });
    //   }

    //   return true;
    // },
    jwt: async ({ token }) => {
      connectDB();
      if (!token.sub) return token;
      const existingUser = await User.findById(token.sub).select(
        "-password -resetCode -__v -createdAt -updatedAt -members -favoriteFiles -trashedFiles "
      );

      if (!existingUser) return token;
      token.role = existingUser.role || "user";

      return token;
    },

    session: async ({ session, token }: any) => {
      // console.log("🚀 ~ session: ~ token:", token);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          email: token.email,
          name: token.name,
          image: token.picture,
          role: token.role || "user",
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
