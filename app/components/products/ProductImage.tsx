"use client";

import {
    CartProductType,
    SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
                                                       cartProduct,
                                                       product,
                                                       handleColorSelect,
                                                   }) => {
    return (
        <div
            className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        >
            <div
                className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]"
            >
                {product.images.map((image: SelectedImgType) => {
                    return (
                        <div
                            key={image.color}
                            onMouseEnter={() => handleColorSelect(image)}
                            className={`relative w-[80%] aspect-square rounded hover-image-effect ${
                                cartProduct.selectedImg.color === image.color
                                    ? "selected-image-border"
                                    : "border-none"
                            }`}
                        >
                            <Image
                                src={image.image}
                                alt={image.color}
                                fill
                                className="object-contain"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image
                    fill
                    src={cartProduct.selectedImg.image}
                    alt={cartProduct.name}
                    className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                />
            </div>
        </div>
    );
};

export default ProductImage;
