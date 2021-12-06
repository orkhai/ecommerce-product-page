import React, { Fragment, useContext, useState } from "react";
import classes from "./Main.module.css";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";
import CartContext from "../store/cart-context";
import LightboxModal from "../UI/LightboxModal";

const Main = () => {
  const [bg, setBg] = useState(classes.container);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const thumbnailOneHandler = () => {
    setBg(classes.container);
  };

  const thumbnailTwoHandler = () => {
    setBg(classes.container_two);
  };

  const thumbnailThreeHandler = () => {
    setBg(classes.container_three);
  };

  const thumbnailFourHandler = () => {
    setBg(classes.container_four);
  };

  const lightboxHandler = () => {
    setIsLightboxOpen((prevState) => !prevState);
  };

  return (
    <main>
      <div className={classes.mobile_container}>
        <div className={`${bg}`}>
          <button onClick={prevImgHandler} className={classes.prev}></button>
          <button onClick={nextImgHandler} className={classes.next}></button>
        </div>
      </div>

      {isLightboxOpen && (
        <Fragment>
          <button
            onClick={lightboxHandler}
            className={classes.lightbox_close}
          ></button>
          <LightboxModal />
        </Fragment>
      )}
      <div className={classes.container_thumbnails}>
        <div onClick={lightboxHandler} className={`${bg}`}>
          <button onClick={prevImgHandler} className={classes.prev}></button>
          <button onClick={nextImgHandler} className={classes.next}></button>
        </div>

        <div className={classes.thumbnails}>
          <div
            onClick={thumbnailOneHandler}
            className={`${classes.thumbnail_one}  ${
              bg === classes.container && classes.thumbnail_active
            }`}
          ></div>
          <div
            onClick={thumbnailTwoHandler}
            className={`${classes.thumbnail_two}  ${
              bg === classes.container_two && classes.thumbnail_active
            }`}
          ></div>
          <div
            onClick={thumbnailThreeHandler}
            className={`${classes.thumbnail_three}  ${
              bg === classes.container_three && classes.thumbnail_active
            }`}
          ></div>
          <div
            onClick={thumbnailFourHandler}
            className={`${classes.thumbnail_four}  ${
              bg === classes.container_four && classes.thumbnail_active
            }`}
          ></div>
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
