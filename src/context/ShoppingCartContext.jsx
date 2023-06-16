import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCard, setShoppingCar] = useState([]);

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
  };

  return (
    <ShoppingCartContext.Provider value={valuesContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
