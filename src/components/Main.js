import React, { useContext, useState } from "react";
import classes from "./Main.module.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";
import CartContext from "../store/cart-context";

const Main = () => {
  const [bg, setBg] = useState(classes.container);

  const cartCtx = useContext(CartContext);
  const newItemCount = cartCtx.itemCount;

  const nextImgHandler = () => {
    if (bg === classes.container) {
      setBg(classes.container_two);
    } else if (bg === classes.container_two) {
      setBg(classes.container_three);
    } else if (bg === classes.container_three) {
      setBg(classes.container_four);
    }
  };

  const prevImgHandler = () => {
    if (bg === classes.container_four) {
      setBg(classes.container_three);
    } else if (bg === classes.container_three) {
      setBg(classes.container_two);
    } else if (bg === classes.container_two) {
      setBg(classes.container);
    }
  };

  return (
    <main>
      <div className={classes.container_thumbnails}>
        <div className={`${bg}`}>
          <button onClick={prevImgHandler} className={classes.prev}></button>
          <button onClick={nextImgHandler} className={classes.next}></button>
        </div>

        <div className={classes.thumbnails}>
          <div className={classes.thumbnail_one}></div>
          <div className={classes.thumbnail_two}></div>
          <div className={classes.thumbnail_three}></div>
          <div className={classes.thumbnail_four}></div>
        </div>
      </div>

      <section>
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className={classes.price}>
          <h3>
            $125.00 <span>50%</span>
          </h3>
          <h4>$250.00</h4>
        </div>
        <div className={classes.number_add}>
          <div className={classes.number}>
            <button onClick={cartCtx.removeItem}>
              <img src={minus} alt="" />
            </button>
            {newItemCount}
            <button onClick={cartCtx.addItem}>
              <img src={plus} alt="" />
            </button>
          </div>
          <button onClick={cartCtx.addToCart} className={classes.add}>
            <img src={cart} alt="" /> Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
