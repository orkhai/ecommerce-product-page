import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import classes from "./LightboxModal.module.css";

const Lightbox = () => {
  const [bg, setBg] = useState(classes.container);

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
    <Fragment>
      <Backdrop />
      <div className={classes.lightbox}>
        <div className={`${bg}`}>
          <button onClick={prevImgHandler} className={classes.prev}></button>
          <button onClick={nextImgHandler} className={classes.next}></button>
        </div>

        <div className={classes.lightbox_thumbnails}>
          <div
            className={`${classes.lightbox_thumbnail_one}  ${
              bg === classes.container && classes.lightbox_thumbnail_active
            }`}
          ></div>
          <div
            className={`${classes.lightbox_thumbnail_two}  ${
              bg === classes.container_two && classes.lightbox_thumbnail_active
            }`}
          ></div>
          <div
            className={`${classes.lightbox_thumbnail_three}  ${
              bg === classes.container_three &&
              classes.lightbox_thumbnail_active
            }`}
          ></div>
          <div
            className={`${classes.lightbox_thumbnail_four}  ${
              bg === classes.container_four && classes.lightbox_thumbnail_active
            }`}
          ></div>
        </div>
      </div>
    </Fragment>
  );
};

const LightboxModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Lightbox />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default LightboxModal;
