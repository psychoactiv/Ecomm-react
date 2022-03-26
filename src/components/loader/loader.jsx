import { React, Fragment } from "react";
import "./loader.css";

const Loader = () => {
  return (
    <Fragment>
      <div className="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
};

export { Loader };
