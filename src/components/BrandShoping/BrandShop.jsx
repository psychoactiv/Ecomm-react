import { React, Fragment } from "react";

export function BrandShop() {
  return (
    <Fragment>
      <div className="best-seller-head head-font mgn-lt-4 mgn-tp-4">
        Shop by Brand
      </div>
      <div className="flex flex-wrap mgn-tp-4 jc-sb brand-logo-container">
        <div className="brand-img-container">
          <img
            src="./Assets/Images/58687-logo-computer-apple-icons-free-hd-image.png"
            alt="apple-logo"
            className="display-spec-img"
          />
        </div>
        <div className="brand-img-container">
          <img
            src="./Assets/Images/OnePlus-Rebrand-Red.png"
            alt="Oneplus"
            className="display-spec-img"
          />
        </div>
        <div className="brand-img-container mgn-lt-2-5">
          <img
            src="./Assets/Images/Samsung-Logo.png"
            alt="Samsung"
            className="display-spec-img"
          />
        </div>
      </div>
    </Fragment>
  );
}
