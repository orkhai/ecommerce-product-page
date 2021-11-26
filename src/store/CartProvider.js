import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemHandler = () => {
    setItemCount(itemCount + 1);

    if (itemCount >= 5) {
      setItemCount(5);
    }
  };

  const removeItemHandler = () => {
    setItemCount(itemCount - 1);

    if (itemCount <= 0) {
      setItemCount(0);
    }
  };

  const addToCartHandler = () => {
    if (cartContext.itemCount >= 1) {
      setAddedToCart(true);
    }
    setCartTotal(cartTotal + itemCount);
  };

  const deleteItemHandler = () => {
    setCartTotal(cartTotal - 1);
    if (cartTotal <= 1) {
      setAddedToCart(false);
    }
  };

  const checkoutHandler = () => {
    setCartTotal(0);
    setItemCount(0);
    setAddedToCart(false);
  };

  const cartContext = {
    itemCount: itemCount,
    cartTotal: cartTotal,
    addedToCart: addedToCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    deleteItem: deleteItemHandler,
    addToCart: addToCartHandler,
    checkout: checkoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
