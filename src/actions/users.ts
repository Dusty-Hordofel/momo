import connectDB from "@/config/database";
import User from "../models/userModel";
import bcrypt from "bcrypt";

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface ILoginUser {
  email: string;
  password: string;
}
export const createUser = async (formData: IUser) => {
  const { name, email, password } = formData;
  try {
    connectDB();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return { errMessage: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    return savedUser._id;
  } catch (error: any) {
    return { errMessage: error.message };
  }
};

export const loginUser = async (formData: ILoginUser) => {
  const { email, password } = formData;
  try {
    connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      return { errMessage: "User does not exist" };
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return { errMessage: "Invalid credentials" };
    }
    return { _id: user._id, name: user.name };
  } catch (error: any) {
    return { errMessage: error.message };
  }
};
