import { React, Fragment } from "react";
import appleImg from "../../Assets/Images/58687-logo-computer-apple-icons-free-hd-image.png";
import oneplusImg from "../../Assets/Images/OnePlus-Rebrand-Red.png";
import samsungImg from "../../Assets/Images/Samsung-Logo.png";

export function BrandShop() {
  return (
    <Fragment>
      <div class="best-seller-head head-font mgn-lt-4 mgn-tp-4">
        Shop by Brand
      </div>
      <div class="flex flex-wrap mgn-tp-4 jc-sb brand-logo-container">
        <div class="brand-img-container">
          <img src={appleImg} alt="apple-logo" class="display-spec-img" />
        </div>
        <div class="brand-img-container">
          <img src={oneplusImg} alt="Oneplus" class="display-spec-img" />
        </div>
        <div class="brand-img-container mgn-lt-2-5">
          <img src={samsungImg} alt="Samsung" class="display-spec-img" />
        </div>
      </div>
    </Fragment>
  );
}
