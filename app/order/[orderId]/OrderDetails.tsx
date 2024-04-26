"use client";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";
import React from "react";
import moment from "moment";
import 'moment/locale/fr'

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="détails de la commande" />
      </div>
      <div>numéro de commande: {order.id}</div>
      <div>
        Montant total:{" "}
        <span className="font-bold">{formatPrice(order.amount)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Statut de paiement:</div>
        <div>
          {order.status === "en cours" ? (
            <Status
              text="en attente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complet" ? (
            <Status
              text="complet"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Statut de livraison:</div>
        <div>
          {order.deliveryStatus === "en attente" ? (
            <Status
              text="en attente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "expédié" ? (
            <Status
              text="expédié"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "livré" ? (
            <Status
              text="livré"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
        <div>Date : {moment(order.createDate).locale('fr').fromNow()}</div>
        <div>
            <h2 className="font-semibold mt-4 mb-2">Produits commandés</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">PRODUIT</div>
          <div className="justify-self-center">PRIX</div>
          <div className="justify-self-center">QTé</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
