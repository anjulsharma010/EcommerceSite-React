// 1. create context
// 2. create provider
// 3. consumer

import axios from "axios";
import { createContext, useContext, useEffect } from "react";

export const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

export const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(products);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Anjul" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(AppContext);
};
