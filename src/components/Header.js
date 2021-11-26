import React, { Fragment, useState, useContext } from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.svg";
import CartIcon from "../components/Cart/CartIcon";
import avatar from "../images/image-avatar.png";
import MobileMenu from "../UI/MobileMenu";
import Backdrop from "../UI/Backdrop";
import CartModal from "./Cart/CartModal";
import CartContext from "../store/cart-context";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCtx = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const cartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header>
      {isMenuOpen && (
        <Fragment>
          <button
            className={classes.menu_clicked}
            onClick={toggleMenu}
          ></button>
          <MobileMenu />
          <Backdrop onClose={toggleMenu} />
        </Fragment>
      )}
      {!isMenuOpen && (
        <button className={classes.menu} onClick={toggleMenu}></button>
      )}
      <img className={classes.logo} src={logo} alt="Sneakers Logo" />
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        {isCartOpen && <CartModal />}
        <button className={classes.cart} onClick={cartHandler}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          {cartCtx.addedToCart && (
            <span className={classes.badge}>{cartCtx.cartTotal}</span>
          )}
        </button>
        <img className={classes.avatar} src={avatar} alt="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
