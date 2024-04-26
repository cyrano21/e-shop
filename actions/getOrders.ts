import prisma from '@/libs/prismadb';

export default async function getOrders(){
    try {
        const orders = await prisma.order.findMany({
            include: {
                user: true
            },
            orderBy: {
                createDate: 'desc'
            }
        });

        // Filtrer les commandes sans utilisateur si nécessaire
        const filteredOrders = orders.filter(order => order.user !== null);

        return filteredOrders;
    } catch (error) {
        console.error("Error fetching orders:", error);
        // Renvoyer une réponse d'erreur plus générique
        throw new Error("Failed to fetch orders.");
    }
}
