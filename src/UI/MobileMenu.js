import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";

const Menu = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Menu />, document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default MobileMenu;
