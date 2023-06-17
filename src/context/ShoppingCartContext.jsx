import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCard, setShoppingCar] = useState([]);
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);

  const [orderProducts, setOrderProducts] = useState([]);




  const openCheckoitSideMenu = () => {
    setCheckoutSideMenuOpen(true);
  };
  const closeCheckoitSideMenu = () => setCheckoutSideMenuOpen(false);

  const openProductDetail = () => {
    setViewDetail(true);
  };
  const closeProductDetail = () => setViewDetail(false);






  const valuesContext = {
    count,
    setCount,
    viewDetail,
    openProductDetail,
    closeProductDetail,
    productToShow,
    setProductToShow,
    shoppingCard,
    setShoppingCar,
    isCheckoutSideMenuOpen,
    openCheckoitSideMenu,
    closeCheckoitSideMenu,
    orderProducts,
    setOrderProducts
  };

  return (
    <ShoppingCartContext.Provider value={valuesContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
