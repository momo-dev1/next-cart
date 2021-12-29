import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import { products } from "./data";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    cart: products,
    amount: 0,
    subtotal: 0,
    shipping: 5,
    tax: 15,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAmount = ({ id, amount }) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, amount } });
  };
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider value={{ ...state, removeProduct, toggleAmount }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
