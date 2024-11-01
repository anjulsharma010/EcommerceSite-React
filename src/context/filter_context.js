import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const filterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set view view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };


  useEffect(() => {
    dispatch({type: "SORTING_PRODUCTS"})
  }, [state.sorting_value]);


  // to sort the products 
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
