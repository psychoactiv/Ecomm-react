import { useFilter } from "../../contexts/Filter-context/Filter-context";
import { React } from "react";
import { Loader } from "../../components";
import "./ProductDisplay.css";

export function ProductDisplay() {
  const { finalArr, chooseStars, dispatch, load } = useFilter();
  return (
    <div className="flex flex-direct-col width-take-all">
      <div className="best-seller-head head-font mgn-lt-4 flex jc-sb">
        <div>Your desired products</div>
        <button
          className="all-btn-el floating-action-btn clear-filter-btn"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Clear filters
        </button>
      </div>

      <div className="flex flex-wrap best-selling col-gap-2 row-gap-2 jc-center product-container ">
        {load ? (
          <Loader />
        ) : finalArr.length ? (
          finalArr.map((item) => {
            const { bg, font } = chooseStars(item.rating);
            return (
              <div
                key={item.id}
                className="product-cards flex flex-direct-col jc-sb"
              >
                <div className=" product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
                  <img
                    src={item.image}
                    alt="phone"
                    className="display-spec-img"
                  />
                </div>
                <div className="child-wish-list-conatiner">
                  <i className="fas fa-heart child-wish-list"></i>
                </div>
                <div>
                  <h5 className="rubik-font  mgn-tp-0-5 mgn-lt-1 product-card-head">
                    {item.name}
                  </h5>
                  <div className="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
                    <span className={`${bg} same-star chng-pad`}>
                      {item.rating} <i className={`fas fa-star ${font}`}></i>
                    </span>
                    <span className="font-wt-black card-price">
                      {item.price}
                    </span>
                  </div>
                  <button className="all-btn-el add-to-cart product-card-buy mgn-tp-1">
                    <i className="fas fa-shopping-cart "></i> ADD TO CART
                  </button>
                  <button className="wishlist-btn">Add To Wishlist</button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="filter-unmatched">
            Sorry, Your filter didn't match any products 😔
          </div>
        )}
      </div>
    </div>
  );
}
