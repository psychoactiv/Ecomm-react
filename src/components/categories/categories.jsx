import { React, Fragment } from "react";
import "./categories.css";

export function Categories() {
  return (
    <Fragment>
      <h3 className="text-center category-title head-font mgn-tp-4">
        Categories
      </h3>

      <div className="products-spec-display rubik-font">
        <h4 className="spec-display-head">Top-notch Processor</h4>
        <h4 className="spec-display-head">High-end GPU for gamers</h4>
        <h4 className="spec-display-head">Pixel perfect Camera for memories</h4>
        <div className="img-display-container">
          <img
            className="display-spec-img"
            src="./Assets/Images/1-198.jpg"
            alt="Processor"
          />
        </div>
        <div className="img-display-container">
          <img
            className="display-spec-img"
            src="./Assets/Images/download_1_6_4.jpg"
            alt="GPU"
          />
        </div>
        <div className="img-display-container">
          <img
            className="display-spec-img"
            src="./Assets/Images/oppo-reno.webp"
            alt="Camera"
          />
        </div>
      </div>
    </Fragment>
  );
}
