"use client";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";
import React from "react";

interface ListRatingProps {
    product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    if (product.reviews.length === 0) return null;

    return (
        <div className="list-rating-container">
            <Heading title="Évaluation du produit" className="list-rating-title" />
            <div className="text-sm mt-2">
                {product.reviews.map((review: any) => (
                    <div key={review.id} className="list-rating-review max-w-[300px]">
                        <div className="flex gap-2 items-center">
                            <Avatar src={review?.user.image} />
                            <div className="font-semibold">{review?.user.name}</div>
                            <div className="font-light list-rating-subtext">
                                {moment(review.createdDate).fromNow()}
                            </div>
                        </div>
                        <div className="mt-2">
                            <Rating value={review.rating} readOnly />
                            <div className="ml-2">{review.comment}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListRating;
