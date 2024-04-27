const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
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
                    userId: "662c14c0121e2099116c3441",
                    rating: 5,
                    comment: "excellent",
                    createdDate: new Date("2023-07-06T06:08:33.067Z"),
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
                    userId: "662c14c0121e2099116c3441",
                    rating: 4,
                    comment: "Suffisamment bon. J'apprécie la caméra et le boîtier. La livraison a été rapide.",
                    createdDate: new Date("2023-06-26T15:53:44.483Z"),
                },
                {
                    userId: "662c14c0121e2099116c3441",
                    rating: 5,
                    comment: "J'ai vraiment aimé !!",
                    createdDate: new Date("2023-06-26T14:30:40.998Z"),
                },
            ],
        },
        {
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
            reviews: [],
        },
        {
            name: "Ordinateur portable Dell XPS 13",
            description: "13.3'' 4K UHD Touch, Intel i7-10710U, 16GB RAM, 512GB SSD, Windows 10 Pro, le meilleur pour les professionnels et les créatifs.",
            price: 1649,
            brand: "Dell",
            category: "Ordinateurs",
            inStock: true,
            images: [
                {
                    color: "Argent",
                    colorCode: "#C0C0C0",
                    image: "https://m.media-amazon.com/images/I/71TJA+s0PPL._AC_SX679_.jpg",
                }
            ],
            reviews: [],
        },
        {
            name: "Samsung Galaxy S22 Ultra",
            description: "Écran Dynamic AMOLED 2X de 6,8 pouces, 128 GB de stockage, caméra de 108 MP, une puissance inégalée pour la photographie mobile.",
            price: 1200,
            brand: "Samsung",
            category: "Téléphone",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://m.media-amazon.com/images/I/81kfA-GtWwL._AC_SX679_.jpg",
                }
            ],
            reviews: [],
        },
        {
            name: "Montre Connectée Garmin Fenix 6 Pro",
            description: "Fonctions de navigation avancées, mesure de la fréquence cardiaque au poignet, cartes TOPO colorées, musique et paiements sans contact.",
            price: 649.99,
            brand: "Garmin",
            category: "Électronique",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://m.media-amazon.com/images/I/71E+ww9v5EL._AC_SX679_.jpg",
                }
            ],
            reviews: [],
        },
        {
            name: "ASUS ROG Strix",
            description: "Ordinateur de bureau gaming puissant équipé d'un processeur Intel i9 et d'une carte graphique NVIDIA RTX 3080.",
            price: 2999,
            brand: "ASUS",
            category: "Desktop",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://example.com/images/asus-rog-strix-black.jpg",
                },
                {
                    color: "Blanc",
                    colorCode: "#FFFFFF",
                    image: "https://example.com/images/asus-rog-strix-white.jpg",
                },
            ],
            reviews: [],
        },
        {
            name: "HP Spectre x360",
            description: "Laptop convertible haut de gamme avec écran tactile 4K, idéal pour les professionnels et les créateurs de contenu.",
            price: 1549,
            brand: "HP",
            category: "Laptop",
            inStock: true,
            images: [
                {
                    color: "Bleu foncé",
                    colorCode: "#00008B",
                    image: "https://example.com/images/hp-spectre-blue.jpg",
                },
                {
                    color: "Argent",
                    colorCode: "#C0C0C0",
                    image: "https://example.com/images/hp-spectre-silver.jpg",
                },
            ],
            reviews: [],
        },
        {
            name: "Samsung QLED Q80T",
            description: "Téléviseur QLED de 65 pouces offrant une qualité d'image exceptionnelle avec Quantum Dot technology.",
            price: 2100,
            brand: "Samsung",
            category: "Tv",
            inStock: true,
            images: [
                {
                    color: "Noir",
                    colorCode: "#000000",
                    image: "https://example.com/images/samsung-qled-black.jpg",
                },
            ],
            reviews: [],
        },
        {
            name: "Apple Watch Series 7",
            description: "Montre connectée avec un large écran Retina, suivi de santé et de fitness, résistance à l'eau.",
            price: 399,
            brand: "Apple",
            category: "Montre",
            inStock: true,
            images: [
                {
                    color: "Red",
                    colorCode: "#FF0000",
                    image: "https://example.com/images/apple-watch-red.jpg",
                },
                {
                    color: "Silver",
                    colorCode: "#C0C0C0",
                    image: "https://example.com/images/apple-watch-silver.jpg",
                },
            ],
            reviews: [],
        }

    ];

    console.log(`Starting to insert products...`);

    for (const product of products) {
        const productData = {
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
            }))
        };

        // Ajouter les avis seulement s'ils existent
        if (product.reviews && product.reviews.length > 0) {
            productData.reviews = {
                create: product.reviews.map(review => ({
                    userId: review.userId,
                    rating: review.rating,
                    comment: review.comment,
                    createdDate: review.createdDate.toISOString(),
                }))
            };
        }

        const insertedProduct = await prisma.product.create({
            data: productData
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
