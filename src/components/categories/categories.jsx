import { React, Fragment } from "react";
import "./categories.css";
import processorImg from "../../Assets/Images/1-198.jpg";
import GPUImg from "../../Assets/Images/download_1_6_4.jpg";
import CameraImg from "../../Assets/Images/oppo-reno.webp";

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
            src={processorImg}
            alt="Processor"
          />
        </div>
        <div className="img-display-container">
          <img className="display-spec-img" src={GPUImg} alt="GPU" />
        </div>
        <div className="img-display-container">
          <img className="display-spec-img" src={CameraImg} alt="Camera" />
        </div>
      </div>
    </Fragment>
  );
}
