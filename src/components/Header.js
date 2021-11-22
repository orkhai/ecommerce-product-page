import classes from "./Header.module.css";
import logo from "../images/logo.svg";
import CartIcon from "../components/Cart/CartIcon";
import avatar from "../images/image-avatar.png";

const Header = () => {
  return (
    <header>
      <button className={classes.menu}></button>
      <img src={logo} alt="Sneakers Logo" />
      <button className={classes.cart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.badge}>3</span>
      </button>
      <img src={avatar} alt="user-avatar" />
    </header>
  );
};

export default Header;
