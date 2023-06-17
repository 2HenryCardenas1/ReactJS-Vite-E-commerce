import {createContext, useEffect, useState} from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCard, setShoppingCar] = useState([]);
  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);

  const [orderProducts, setOrderProducts] = useState([]);

  const [items, setItems] = useState([]);

  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const openCheckoitSideMenu = () => {
    setCheckoutSideMenuOpen(true);
  };
  const closeCheckoitSideMenu = () => setCheckoutSideMenuOpen(false);

  const openProductDetail = () => {
    setViewDetail(true);
  };
  const closeProductDetail = () => setViewDetail(false);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle]);

 

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
    setOrderProducts,
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
  };

  return (
    <ShoppingCartContext.Provider value={valuesContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
