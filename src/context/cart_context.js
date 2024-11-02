import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext();

const getLocalCartData = ()=>{
  let localCartData = localStorage.getItem("sharmaCart")
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //  Add data in local Storage
  useEffect(() => {
    localStorage.setItem("sharmaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
