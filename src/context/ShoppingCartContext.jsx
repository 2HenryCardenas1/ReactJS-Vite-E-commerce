import {createContext, useState} from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);

  const valuesContext = {
    count,
    setCount,
  };

  return (
    <ShoppingCartContext.Provider value={valuesContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
