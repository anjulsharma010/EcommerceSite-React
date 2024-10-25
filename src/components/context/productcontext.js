// 1. create context
// 2. create provider
// 3. consumer

import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{myName: "Anjul"}}>{children}</AppContext.Provider>;
};

export const useProductContext = ()=>{
    return useContext(AppContext)
}
