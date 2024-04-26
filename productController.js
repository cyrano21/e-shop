// productController.js
import prisma from './prismaClient';
import logger from './logger';
import { ObjectId } from 'mongodb';

function isValidObjectId(id) {
    return ObjectId.isValid(id);
}

export const getProductById = async (productId) => {
    try {
        if (!isValidObjectId(productId)) {
            logger.error('Identifiant de produit non valide');
            throw new Error('Identifiant de produit non valide');
        }
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });
        if (!product) {
            logger.error('Produit non trouvé');
            throw new Error('Produit non trouvé');
        }
        logger.info(`Produit récupéré: ${product.name}`);
        return product;
    } catch (error) {
        logger.error(`Erreur: ${error.message}`);
        throw error;
    }
};
