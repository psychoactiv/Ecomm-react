import { React, Fragment } from "react";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "./cart-card.css";
import { calculateCartItems } from "../../utils/cart-details";
import { useWishlist } from "../../contexts/wishlist-context/wishlist-context";
export const CartCard = ({ decideSnackbarFate }) => {
  const { cartState, cartDispatch } = useCartContext();
  const { dispatchWish } = useWishlist();
  return (
    <Fragment>
      {cartState.map((item) => {
        const [discountedPrice, savedAmount] = calculateCartItems(
          item.price,
          40
        );
        return (
          <div className="flex flex-direct-col cart-product-container mgn-tp-1 mgn-btm-1 rubik-font border-radius8">
            <div className="flex">
              <div className="product-cart-details">
                <div className="pd-1">{item.name}</div>
                <div className="flex col-gap-1 jc-center">
                  <h3>
                    ₹{(item.qty * discountedPrice).toLocaleString("en-US")}
                  </h3>
                  <del>₹{(item.qty * item.price).toLocaleString("en-US")}</del>
                </div>
                <div className="green-alert-dark-color text-center">
                  You saved ₹ {(item.qty * savedAmount).toLocaleString("en-US")}
                </div>
                <div className="flex col-gap-1 pd-1">
                  <div className="grey-0-5-bdr600 pd-0-5--1 border-radius8">
                    RAM : <span className="font-wt-bold">{item.ram}</span>
                  </div>

                  <div className="grey-0-5-bdr600 pd-0-5--1 border-radius8 item-cart-qty">
                    QTY: <span className="font-wt-bold">{item.qty}</span>
                    <div className="cart-qty-btn-container">
                      {item.qty < 10 ? (
                        <button
                          className="increase-cart-item-qty qty-btn"
                          onClick={() =>
                            cartDispatch({
                              type: "INCREMENT_CART_ITEMS",
                              payload: item.id,
                            })
                          }
                        >
                          +
                        </button>
                      ) : (
                        <button
                          className="increase-cart-item-qty display-btn snck change-btn qty-btn"
                          onClick={() => {
                            decideSnackbarFate("INCREASE");
                            console.log(decideSnackbarFate);
                          }}
                        >
                          +
                        </button>
                      )}
                      {item.qty > 1 ? (
                        <button
                          className="decrease-cart-item-qty qty-btn"
                          onClick={() => {
                            cartDispatch({
                              type: "DECREMENT_CART_ITEMS",
                              payload: item.id,
                            });
                            console.log(decideSnackbarFate);
                          }}
                        >
                          -
                        </button>
                      ) : (
                        <button
                          className="decrease-cart-item-qty qty-btn"
                          onClick={() =>
                            decideSnackbarFate("DECREASE", item.id)
                          }
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-item-img-container">
                <img src={item.image} alt="Iphone" className="cart-item-img" />
              </div>
            </div>

            <div className="flex">
              <button
                className="remove-from-cart-btn cart-card-btn"
                onClick={() =>
                  cartDispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
              >
                Remove
              </button>
              <button
                className="move-to-wishlist-btn cart-card-btn"
                onClick={() => {
                  dispatchWish({ type: "ADD_TO_WISHLIST", payload: item });
                  cartDispatch({ type: "REMOVE_ITEM", payload: item.id });
                }}
              >
                Move to Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
