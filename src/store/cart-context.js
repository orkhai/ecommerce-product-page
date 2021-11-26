import React from "react";

const CartContext = React.createContext({
  itemCount: 0,
  cartTotal: 0,
  addedToCart: false,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  addToCart: () => {},
  checkout: () => {},
});

export default CartContext;
