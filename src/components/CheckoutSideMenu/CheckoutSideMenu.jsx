import {XMarkIcon} from "@heroicons/react/24/solid";
import React from "react";
import useShoppingCard from "../../hooks/useShoppingCard";
import "./styles.css";
export default function CheckoutSideMenu() {
  const {isCheckoutSideMenuOpen, closeCheckoitSideMenu} = useShoppingCard();
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
    </aside>
  );
}
