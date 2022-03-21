import { React, Fragment } from "react";
import "./banner.css";

export function Banner() {
  return (
    <Fragment>
      <div>
        <div className="top-image-container">
          <img
            src="./Assets/Images/tp29-ning-18-autumn.jpg"
            alt="Phone-img"
            className="top-img"
          />
          <div className="top-img-overlay rubik-font">
            Branded SMART PHONES on 40% Discount
          </div>
          <div className="brand-intro-container">
            <h3>
              <span className="brand-intro-start rubik-font">
                Smart phones with exciting new features and up to date Specs
              </span>
              <span className="brand-intro-end rubik-font">
                {" "}
                exclusively available only on
              </span>
              <span className="brand-name-on-intro rubik-font"> PhoneStop</span>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
