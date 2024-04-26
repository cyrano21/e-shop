// Importation des dépendances
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/libs/prismadb'; // Assurez-vous que le chemin d'importation est correct
import getCurrentUser from "@/actions/getCurrentUser";

// Handler pour la méthode POST
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return res.status(401).json({ error: "Authentication required" });
    }

    const { comment, rating, product, userId } = req.body;

    if (!comment || typeof rating !== 'number' || !product || !product.id || !userId) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const deliveredOrder = currentUser?.orders.some(order =>
        order.products.find(item => item.id === product.id) && order.deliveryStatus === 'delivered');

    const userReview = product?.reviews.find((review: { userId: string; }) => review.userId === currentUser.id);

    if (userReview) {
        return res.status(403).json({ error: "Review already exists" });
    }

    if (!deliveredOrder) {
        return res.status(403).json({ error: "No delivered order found for the product" });
    }

    try {
        const review = await prisma.review.create({
            data: {
                comment,
                rating,
                productId: product.id,
                userId
            }
        });
        return res.status(201).json(review);
    } catch (error: any) {
        console.error('Error saving rating:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
