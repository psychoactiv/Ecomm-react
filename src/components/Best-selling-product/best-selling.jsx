import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/Filter-context/Filter-context";
import "./best-selling.css";
export function BestSelling() {
  const { data, chooseStars } = useFilter();
  return (
    <Fragment>
      <div className="best-seller-head head-font mgn-lt-4">
        Best selling products
      </div>
      <div className="flex flex-wrap best-selling col-gap-2 row-gap-2 jc-center align-i-center">
        {data.data?.products.map((item) => {
          const { bg, font } = chooseStars(item.rating);
          return item.bestSelling ? (
            <div
              className="product-cards flex flex-direct-col jc-sb"
              key={item.id}
            >
              <div className="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
                <div className="child-wish-list-conatiner">
                  <i className="fas fa-heart child-wish-list"></i>
                </div>
                <img
                  src={item.image}
                  alt="phone"
                  className="display-spec-img"
                />
              </div>
              <div>
                <h5 className="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
                  {item.name}
                </h5>
                <div className="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
                  <span className={`${bg} same-star chng-pad`}>
                    {item.rating} <i className={`fas fa-star ${font}`}></i>
                  </span>
                  <span className="font-wt-black card-price">{item.price}</span>
                </div>
                <button className="all-btn-el add-to-cart product-card-buy mgn-tp-1">
                  <i className="fas fa-shopping-cart"></i> ADD TO CART
                </button>
              </div>
            </div>
          ) : null;
        })}
        <div>
          <button className="redirect-product-page">
            <Link
              to="./products"
              className="rubik-font all-btn-el blue-color500"
            >
              EXPLORE MORE ➜
            </Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
