import { React, Fragment } from "react";
import "./best-selling.css";
export function BestSelling() {
  return (
    <Fragment>
      <div class="best-seller-head head-font mgn-lt-4">
        Best selling products
      </div>

      <div class="flex flex-wrap best-selling col-gap-2 row-gap-2 jc-center align-i-center">
        <div class="product-cards flex flex-direct-col jc-sb">
          <div class="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
            <div class="child-wish-list-conatiner">
              <i class="fas fa-heart child-wish-list"></i>
            </div>
            <img
              src="/Images/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg"
              alt="phone"
              class="display-spec-img"
            />
          </div>
          <div>
            <h5 class="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
              APPLE iPhone 12 (Black, 64Gb)
            </h5>
            <div class="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
              <span class="top-star same-star chng-pad">
                5 <i class="fas fa-star green-star"></i>
              </span>
              <span class="font-wt-black card-price">₹49,000</span>
            </div>
            <button class="all-btn-el add-to-cart product-card-buy mgn-tp-1">
              <i class="fas fa-shopping-cart"></i> ADD TO CART
            </button>
          </div>
        </div>

        <div class="product-cards flex flex-direct-col jc-sb">
          <div class="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
            <div class="child-wish-list-conatiner">
              <i class="fas fa-heart child-wish-list"></i>
            </div>
            <img
              src="/Images/63796658-96e1-48c4-8b7e-4aa910e81c13_182x182.jpg"
              alt="phone"
              class="display-spec-img"
            />
          </div>
          <div>
            <h5 class="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
              ONE PLUS 9 Pro (Morning mist)
            </h5>
            <div class="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
              <span class="good-star same-star chng-pad">
                4 <i class="fas fa-star green-star"></i>
              </span>
              <span class="font-wt-black card-price">₹35,000</span>
            </div>
            <button class="all-btn-el add-to-cart product-card-buy mgn-tp-1">
              <i class="fas fa-shopping-cart"></i> ADD TO CART
            </button>
          </div>
        </div>

        <div class="product-cards flex flex-direct-col jc-sb">
          <div class="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
            <div class="child-wish-list-conatiner">
              <i class="fas fa-heart child-wish-list"></i>
            </div>
            <img
              src="/Images/305e4829-81b4-423d-88d9-f550bab2e15721151133_182x182.jpg"
              alt="phone"
              class="display-spec-img"
            />
          </div>
          <div>
            <h5 class="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
              SAMSUNG (BLACK 6GB)
            </h5>
            <div class="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
              <span class="top-star same-star chng-pad">
                5 <i class="fas fa-star green-star"></i>
              </span>
              <span class="font-wt-black card-price">₹9,000</span>
            </div>
            <button class="all-btn-el add-to-cart product-card-buy mgn-tp-1">
              <i class="fas fa-shopping-cart"></i> ADD TO CART
            </button>
          </div>
        </div>

        <div class="product-cards flex flex-direct-col jc-sb">
          <div class="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
            <div class="child-wish-list-conatiner">
              <i class="fas fa-heart child-wish-list"></i>
            </div>
            <img
              src="/Images/305e4829-81b4-423d-88d9-f550bab2e15721151133_182x182.jpg"
              alt="phone"
              class="display-spec-img"
            />
          </div>
          <div>
            <h5 class="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
              SAMSUNG (BLACK 8GB)
            </h5>
            <div class="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
              <span class="good-star same-star chng-pad">
                4 <i class="fas fa-star green-star"></i>
              </span>
              <span class="font-wt-black card-price">₹12,000</span>
            </div>
            <button class="all-btn-el add-to-cart product-card-buy mgn-tp-1">
              <i class="fas fa-shopping-cart"></i> ADD TO CART
            </button>
          </div>
        </div>
        <div>
          <button class="redirect-product-page">
            <a href="/Products/products.html" class="rubik-font all-btn-el">
              EXPLORE MORE ➜
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
}