const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Assurez-vous que votre array de produits est importé ou défini ici
    const products = [
        {
            id: "64a654593e91b8e73a351e9b",
            name: "iphone 14",
            description: "Description brève",
            price: 2999,
            brand: "apple",
            category: "Téléphone",
            inStock: true,
            images: [
                {
                    color: "Blanc",
                    colorCode: "#FFFFFF",
                    image: "https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg",
                },
                {
                    color: "Gris",
                    colorCode: "#808080",
                    image: "https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg",
                },
            ],
            reviews: [],
        },
        {
            id: "64a4ebe300900d44bb50628a",
            name: "Clavier éclairé sans fil avancé Logitech MX Keys",
            description: "TOUCHES PARFAITEMENT SCULPTÉES - Les touches concaves épousent la forme de vos doigts, offrant un retour satisfaisant à chaque frappe.\nCONFORT ET STABILITÉ - Tapez avec assurance sur un clavier conçu pour le confort, la stabilité et la précision.",
            price: 102.99,
            brand: "logitech",
            category: "Accessoires",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://m.media-amazon.com/images/I/71gOLg2-kqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                },
            ],
            reviews: [
                {
                    id: "64a65a6158b470c6e06959ee",
                    userId: "6475af156bad4917456e6e1e",
                    productId: "64a4ebe300900d44bb50628a",
                    rating: 5,
                    comment: "excellent",
                    createdDate: "2023-07-06T06:08:33.067Z",
                    user: {
                        id: "6475af156bad4917456e6e1e",
                        name: "Charles",
                        email: "example@gmail.com",
                        emailVerified: null,
                        image: "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
                        hashedPassword: null,
                        createdAt: "2023-05-30T08:08:53.979Z",
                        updatedAt: "2023-05-30T08:08:53.979Z",
                        role: "ADMIN",
                    },
                },
            ],
        },
        {
            id: "648437b38c44d52b9542e340",
            name: "Apple iPhone 13, 64GB",
            description: "Produit reconditionné, entièrement fonctionnel et en excellent état. Garanti 90 jours par E~Shop Renewed. Ce produit préalablement utilisé a été inspecté, testé et nettoyé par des fournisseurs qualifiés d'Amazon. Non certifié par Apple. En 'excellent état'. L'écran et le boîtier ne présentent aucun signe de dommages visibles à plus de 30 cm. La batterie possède au moins 80% de la capacité d'une neuve. Les accessoires peuvent ne pas être originaux mais sont compatibles et fonctionnels. Peut être livré dans une boîte générique. Comprend un outil de retrait de SIM, un chargeur, et un câble de charge. Écouteurs et carte SIM non inclus. Éligible à un remplacement ou remboursement sous 90 jours si ne fonctionne pas comme prévu. Les téléphones reconditionnés ne sont pas garantis étanches.",
            price: 40,
            brand: "Apple",
            category: "Téléphone",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://m.media-amazon.com/images/I/61g+McQpg7L._AC_SX679_.jpg",
                },
                {
                    color: "Bleu",
                    colorCode: "#0000FF",
                    image: "https://m.media-amazon.com/images/I/713Om9vCHUL._AC_SX679_.jpg",
                },
                {
                    color: "Rouge",
                    colorCode: "#FF0000",
                    image: "https://m.media-amazon.com/images/I/61thdjmfHcL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                },
            ],
            reviews: [
                {
                    id: "6499b4887402b0efd394d8f3",
                    userId: "6499b184b0e9a8c8709821d3",
                    productId: "648437b38c44d52b9542e340",
                    rating: 4,
                    comment: "Suffisamment bon. J'apprécie la caméra et le boîtier. La livraison a été rapide.",
                    createdDate: "2023-06-26T15:53:44.483Z",
                    user: {
                        id: "6499b184b0e9a8c8709821d3",
                        name: "Chaoo",
                        email: "example1@gmail.com",
                        emailVerified: null,
                        image: "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
                        hashedPassword: null,
                        createdAt: "2023-06-26T15:40:52.558Z",
                        updatedAt: "2023-06-26T15:40:52.558Z",
                        role: "USER",
                    },
                },
                {
                    id: "6499a110efe4e4de451c7edc",
                    userId: "6475af156bad4917456e6e1e",
                    productId: "648437b38c44d52b9542e340",
                    rating: 5,
                    comment: "J'ai vraiment aimé !!",
                    createdDate: "2023-06-26T14:30:40.998Z",
                    user: {
                        id: "6475af156bad4917456e6e1e",
                        name: "Charles",
                        email: "example@gmail.com",
                        emailVerified: null,
                        image: "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
                        hashedPassword: null,
                        createdAt: "2023-05-30T08:08:53.979Z",
                        updatedAt: "2023-05-30T08:08:53.979Z",
                        role: "ADMIN",
                    },
                },
            ],
        },
    ];



    console.log(`Starting to insert products...`);

    for (const product of products) {
        const insertedProduct = await prisma.product.create({
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                brand: product.brand,
                category: product.category,
                inStock: product.inStock,
                images: product.images.map(img => ({
                    color: img.color,
                    colorCode: img.colorCode,
                    image: img.image
                })),
                reviews: [] // Explicitement un tableau vide
            }
        });
        console.log(`Inserted product with ID: ${insertedProduct.id}`);
    }


    console.log(`Finished inserting products.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });