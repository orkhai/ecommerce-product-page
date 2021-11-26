import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";
import CartContext from "../../store/cart-context";
import thumbnail from "../../images/image-product-1-thumbnail.jpg";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  let numberOfItems = cartCtx.cartTotal;

  return (
    <div className={classes.cart_modal}>
      <header>
        <h1>Cart</h1>
      </header>
      <main>
        {numberOfItems === 0 ? (
          <p className={classes.cart_empty}>Your cart is empty.</p>
        ) : (
          <div className={classes.cart_filled}>
            <div className={classes.cart_filled_top}>
              <img
                className={classes.thumbnail}
                src={thumbnail}
                alt="product-thumbnail"
              />
              <div>
                <p>Autumn Limited Edition...</p>
                <p>
                  $125.00 x {numberOfItems}{" "}
                  <span>{`$${125 * numberOfItems}.00`}</span>
                </p>
              </div>
              <button
                onClick={cartCtx.deleteItem}
                className={classes.delete}
              ></button>
            </div>
            <button onClick={cartCtx.checkout} className={classes.checkout}>
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

const CartModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default CartModal;
