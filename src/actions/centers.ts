"use server";

import CenterModel from "@/models/centerModel";
import { esrpCenters } from "@/assets/esrpCenters";
import connectDB from "@/config/database";

export async function insertManyCenters() {
  try {
    connectDB();
    console.log("Display");
    const centers = await CenterModel.find();
    console.log("🚀 ~ insertManyCenters ~ centers:", centers);
    if (!centers.length) {
      const newCenters = esrpCenters.map((esrpCenter) => {
        return new CenterModel(esrpCenter);
      });
      await CenterModel.insertMany(newCenters);
    }
    console.log("Success");
    return;
  } catch (error: any) {
    return { errMessage: error.message };
  }
}

export async function getAllCenters() {
  try {
    connectDB();
    const centers = await CenterModel.find().select(
      "-__v -createdAt -updatedAt"
    );
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return centers;
  } catch (error: any) {
    return { errMessage: error.message };
  }
}

export async function getCenterBySlug(slug: string) {
  try {
    connectDB();
    const center = await CenterModel.findOne({ _id: slug }).select(
      "-__v -createdAt -updatedAt"
    );
    return center;
  } catch (error: any) {
    return { errMessage: error.message };
  }
}
