"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const handleAction = async (name, user) => {
  if (name === "delete") {
    try {
      await prisma.user.delete({
        where: { id: user.id },
      });
      return { success: true };
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
      return { success: false, error: error.message };
    }
  }
};
