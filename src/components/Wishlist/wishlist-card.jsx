import { React, Fragment } from "react";
import { useWishlist } from "../../contexts/wishlist-context/wishlist-context";
import { useFilter } from "../../contexts/Filter-context/Filter-context";
import { useCartContext } from "../../contexts/Cart-context/cart-context";

function WishListCard() {
  const { initialWish, dispatchWish } = useWishlist();
  const { chooseStars, childWish, childWishSetter } = useFilter();
  const { cartDispatch } = useCartContext();
  return (
    <Fragment>
      {initialWish.wishes.map((item) => {
        const { bg, font } = chooseStars(item.rating);
        return (
          <div class="product-cards flex flex-direct-col jc-sb">
            <div class="product-display-img-container mgn-tp-0-5 mgn-rt-auto mgn-lt-auto">
              <img src={item.image} alt="phone" class="display-spec-img" />
            </div>
            <div>
              <h5 class="rubik-font mgn-tp-0-5 mgn-lt-1 product-card-head">
                {item.name}
              </h5>
              <div class="mgn-tp-1 flex col-gap-1 align-i-end mgn-lt-1">
                <span className={`${bg} same-star chng-pad`}>
                  {item.rating} <i className={`fas fa-star ${font}`}></i>
                </span>
                <span class="font-wt-black card-price">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </div>
              <button
                class="all-btn-el add-to-cart product-card-buy mgn-tp-1"
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: item })
                }
              >
                <i class="fas fa-shopping-cart"></i> ADD TO CART
              </button>
              <button
                class="all-btn-el danger-btn chng-btn-width"
                onClick={() => {
                  dispatchWish({ type: "REMOVE_FROM_WISHLIST", payload: item });
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export { WishListCard };
