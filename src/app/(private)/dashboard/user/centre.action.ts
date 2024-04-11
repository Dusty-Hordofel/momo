"use server";

import connectDB from "@/config/database";
import Center from "@/models/Center";
import CenterRequest from "@/models/CenterRequest";
import User from "@/models/User";
import { currentUser } from "@/utils/auth/currentUser";
import { currentUserRole } from "@/utils/auth/currentUserRole";

//récupérer les requetes d'ajout de centre de formation par utilisateur

export async function getCenterRequestsByUser() {
  connectDB();
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    //récupérer les requetes qui  appartiennent à lutilisateur
    const userRequest = await CenterRequest.find({
      user: loggedInUser.id,
    }).populate("center");
    console.log("🚀 ~ getCenterRequestsByUser ~ userRequest:", userRequest);
    if (!userRequest) {
      return {
        message: "vous n'avez soumis aucune demande",
        error: true,
      };
    }
    return { userRequest: JSON.parse(JSON.stringify(userRequest)) };
  } catch (error) {
    console.log("🚀 ~ getCenterRequestsByUser ~ error:", error);
    return {
      message: "Erreur lors de la récupération de vos demandes",
      success: false,
    };
  }
}

//envoyer une demande pour ajouter un centre de formation
export async function sendRequest(
  centerId: string,
  message: string,
  date: string,
  time: string
) {
  connectDB();
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    //trouver l'utilisateur par son id
    const user = await User.findOne({ _id: loggedInUser.id });

    //si je ne trouve pas l'utilisateur
    if (!user) {
      return { message: "Utilisateur introuvable", success: false };
    }

    //trouver le centre de formation par son id
    const center = await Center.findOne({ _id: centerId });

    //si je ne trouve pas le centre de formation
    if (!center) {
      return { message: "Centre de formation introuvable", success: false };
    }

    //verifier que l'utilisateur n'a pas déjà émis une requete sur ce centre

    const requestExists = await CenterRequest.findOne({
      user: user.id,
      center: center.id,
    });
    if (requestExists) {
      return {
        message:
          "Vous avez déjà envoyé une demande pour ce centre de formation",
        success: false,
      };
    }

    //créer une demande pour ajouter le centre de formation
    const request = await CenterRequest.create({
      user: user.id,
      center: center.id,
      message,
      date,
      time,
    });
    console.log("🚀 ~ sendRequest ~ request: DEMANDE", request);

    //ajouter le statut de la demande chez l'utilisateur
    user.pendingRequests.push(request._id);
    user.save();

    console.log("UTILISATEUR", user);

    return { message: "Demande d'ajout envoyée avec succès", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Erreur lors de l'envoi de la demande", success: false };
  }
}

//trouver les demandes d'ajout faites par l'utilisateur.

export async function getAllUserRequest() {
  connectDB();
  try {
    const loggedInUser = await currentUser();
    const loggedInUserRole = await currentUserRole();

    if (!loggedInUser || loggedInUserRole !== "user") {
      return {
        message: "vous n'êtes pas autorisé à effectuer cette action",
        error: true,
      };
    }

    //récupérer les requetes qui  appartiennent à lutilisateur
    const userRequest = await CenterRequest.find({ user: loggedInUser.id });
    console.log("🚀 ~ getAllUserRequest ~ userRequest:", userRequest);
    if (!userRequest) {
      return {
        message: "vous n'avez soumis aucune demande",
        error: true,
      };
    }
    return { userRequest: JSON.parse(JSON.stringify(userRequest)) };
  } catch (error) {
    console.log("🚀 ~ getAllRequest ~ error:", error);
    return {
      message: "Erreur lors de la récupération de vos demandes",
      success: false,
    };
  }
}
