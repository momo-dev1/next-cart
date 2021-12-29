const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "TOGGLE_AMOUNT":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            amount: action.payload.amount,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case "GET_TOTALS":
      const { subtotal, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          let { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.amount += amount;
          cartTotal.subtotal += itemTotal;
          return cartTotal;
        },
        {
          subtotal: 0,
          amount: 0,
        }
      );
      subtotal = parseFloat(subtotal.toFixed(2));
      return { ...state, subtotal, amount };
    default:
      return state;
  }
};
export default reducer;
