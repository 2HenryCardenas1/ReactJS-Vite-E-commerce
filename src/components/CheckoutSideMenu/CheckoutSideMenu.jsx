import {XMarkIcon} from "@heroicons/react/24/solid";
import React from "react";
import useShoppingCard from "../../hooks/useShoppingCard";
import OrderCard from "../OrderCard/OrderCard";
import "./styles.css";
export default function CheckoutSideMenu() {
  const {isCheckoutSideMenuOpen, closeCheckoitSideMenu, shoppingCard} =
    useShoppingCard();

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xñ">My Order</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => closeCheckoitSideMenu()}
          />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll">
        {shoppingCard.map((item) => (
          <OrderCard
            key={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
          />
        ))}
      </div>
    </aside>
  );
}
