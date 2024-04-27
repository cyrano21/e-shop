"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ProductCardProps {
  data: any;  // Assurez-vous que data.images contient un tableau d'images.
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const [hoverImage, setHoverImage] = useState(data.images[0].image);

  const productRating =
      data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
      data.reviews.length;

  const handleMouseEnter = () => {
    // Change to the next image or reset to first if it's the last one
    const currentIndex = data.images.findIndex((img: { image: any; }) => img.image === hoverImage);
    const nextIndex = (currentIndex + 1) % data.images.length;  // Loop back to the first image
    setHoverImage(data.images[nextIndex].image);
  };

  const handleMouseLeave = () => {
    // Reset to the default image when not hovering
    setHoverImage(data.images[0].image);
  };

  return (
      <div
          onClick={() => router.push(`/product/${data.id}`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="col-span-1
    cursor-pointer
    border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm
    "
      >
        <div
            className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
        >
          <div className="aspect-square overflow-hidden relative w-full">
            <Image
                fill
                src={hoverImage}
                alt={data.name}
                className="w-full h-full object-contain"
            />
          </div>
          <div className="mt-4">{truncateText(data.name)}</div>
          <div>
            <Rating value={productRating} readOnly />
          </div>
          <div>{data.reviews.length} Notes</div>
          <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
      </div>
  );
};

export default ProductCard;
