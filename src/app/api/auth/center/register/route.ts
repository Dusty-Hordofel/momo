import bcrypt from "bcrypt";
import validator from "validator";
import { NextResponse } from "next/server";
import connectDB from "@/config/database";
import User from "@/models/User";
import Center from "@/models/Center";

interface UserData {
  name: string;
  email?: string;
  password?: string;
}
export async function POST(req: Request, res: Response) {
  await connectDB();
  try {
    const body = await req.json();
    // const { name, email, password } = body;
    // if (!email || !password || !name) {
    //   return new Response(
    //     JSON.stringify({
    //       message: "Please fill in all fields.",
    //     }),
    //     { status: 400 }
    //   );
    // }

    // if (!validator.isEmail(email)) {
    //   return new Response(
    //     JSON.stringify({
    //       message: "Please Add a valid email address.",
    //     }),
    //     { status: 400 }
    //   );
    // }

    // const user = await Center.findOne({
    //   email: body.email,
    // });

    // if (user) {
    //   return new Response(
    //     JSON.stringify({
    //       message: "Le Centre de formation est déjà enregistré",
    //     }),
    //     { status: 400 }
    //   );
    // }

    if (body.password.length < 6) {
      return new Response(
        JSON.stringify({
          message: "Le mot de passe doit contenir au moins 6 charactères",
        }),
        { status: 400 }
      );
    }
    const { password, ...rest } = body;

    const cryptedPassword = await bcrypt.hash(body.password, 12);
    const newCenter = new Center({
      ...rest,
      password: cryptedPassword,
    });

    await newCenter.save();

    return new Response(
      JSON.stringify({
        message: "Register success! Please activate your account to start.",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log("🚀 ~ file: route.ts:15 ~ POST ~ error:", error);
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}
