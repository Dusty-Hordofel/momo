"use server";
import { revalidatePath } from "next/cache";
import Pin from "../models/pinModel";
import connectDB from "@/config/database";

export interface IPin {
  name: string;
  title: string | null;
  desc: string | null;
  rating: number;
  lat: number | undefined;
  long: number | undefined;
}

export const createPin = async (formData: IPin) => {
  const newPin = new Pin(formData);
  try {
    connectDB();
    const savedPin = await newPin.save();
    revalidatePath("/"); //Revalidate the home page to show the new pin
    //redirect('/'); //Redirect the user to the home page

    return savedPin;
  } catch (error: any) {
    return { errMessage: error.message };
  }
};

export const getPins = async () => {
  try {
    connectDB();
    const pins = await Pin.find();
    return pins;
  } catch (error: any) {
    return { errMessage: error.message };
  }
};
