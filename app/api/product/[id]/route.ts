// productApi.ts
import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb';
import logger from '@/logger';  // Assurez-vous d'avoir un module logger configuré

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    logger.error("Erreur d'authentification de l'utilisateur");
    return NextResponse.error();
  }

  if (currentUser.role !== "ADMIN") {
    logger.warn(`Accès refusé pour l'utilisateur: ${currentUser.id}`);
    return NextResponse.error();
  }

  try {
    const product = await prisma.product.delete({
      where: { id: params.id },
    });

    if (!product) {
      logger.warn(`Échec de la suppression du produit avec l'ID: ${params.id}`);
      return NextResponse.error();
    }

    logger.info(`Produit supprimé avec succès: ${product.name}`);
    return NextResponse.json(product);
  } catch (error: any) {
    logger.error(`Erreur lors de la suppression du produit: ${error.message}`);
    return NextResponse.error();
  }
}
