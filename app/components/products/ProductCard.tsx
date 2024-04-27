"use client";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface ProductCardProps {
  data: any;
}

declare global {
  interface Window {
    redirectTimer?: ReturnType<typeof setTimeout>; // Optionnel et utilise le type de retour de setTimeout
  }
}


const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const [hoverImageIndex, setHoverImageIndex] = useState(0);

  useEffect(() => {
    // Interval pour changer d'image toutes les 3 secondes
    const imageInterval = setInterval(() => {
      setHoverImageIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.images.length;
        handleImageChange(nextIndex); // Gérer le changement d'image
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [data.images.length]);

  const handleImageChange = (index: number) => {
    // Nettoyer le timer précédent avant de réinitialiser
    clearTimeout(window.redirectTimer);
    // Réinitialiser le timer pour la navigation chaque fois qu'une nouvelle image est affichée
    window.redirectTimer = setTimeout(() => {
      router.push(`/product/${data.id}`);
    }, 4000);
  };

  useEffect(() => {
    // Nettoyer le timer global lors du démontage pour éviter les déclenchements erronés
    return () => {
      if (window.redirectTimer) {
        clearTimeout(window.redirectTimer);
      }
    };
  }, []);

  return (
      <div
          onClick={() => router.push(`/product/${data.id}`)}
          className="col-span-1 cursor-pointer border bg-white rounded-lg shadow-sm p-4 transition-transform duration-300 hover:scale-105 text-center text-sm"
      >
        <div className="flex flex-col items-center w-full gap-4">
          <div className="aspect-square overflow-hidden relative w-full rounded-lg">
            <Image
                fill
                src={data.images[hoverImageIndex].image}
                alt={data.name}
                className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-2 font-semibold">{truncateText(data.name, 50)}</div>
          <Rating value={data.reviews.reduce((acc: number, item: { rating: number }) => item.rating + acc, 0) / data.reviews.length} readOnly />
          <div className="text-gray-500">{data.reviews.length} Notes</div>
          <div className="font-bold">{formatPrice(data.price)}</div>
        </div>
      </div>
  );
};

export default ProductCard;
