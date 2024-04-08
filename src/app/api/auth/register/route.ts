import bcrypt from "bcryptjs";
import validator from "validator";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/database";
import User from "@/models/userModel";

interface UserData {
  name: string;
  email?: string;
  password?: string;
  // genderPreference?: string;
  // lastName?: string;
  // firstName?: string;
}
export async function POST(req: Request, res: Response) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, password }: UserData = body;
    if (!email || !password || !name) {
      return new Response(
        JSON.stringify({
          message: "Please fill in all fields.",
        }),
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return new Response(
        JSON.stringify({
          message: "Please Add a valid email address.",
        }),
        { status: 400 }
      );
    }

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return new Response(
        JSON.stringify({ message: "L'adresse email existe déjà" }),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password must be atleast 6 characters." }),
        { status: 400 }
      );
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newuser = new User({
      name,
      email,
      password: cryptedPassword,
    });

    await newuser.save();

    return new Response(
      JSON.stringify({
        message: "Register success! Please activate your account to start.",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log("🚀 ~ file: route.ts:15 ~ POST ~ error:", error);
    // return { success: false, message: (error as Error).message };
    return NextResponse.json(
      // { message: "Something went wrong" },
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}
