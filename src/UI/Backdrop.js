import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

const Background = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const Backdrop = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Background onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
};

export default Backdrop;
