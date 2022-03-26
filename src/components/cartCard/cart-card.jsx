import { React } from "react";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "./cart-card.css";
import { calculateCartItems } from "../../utils/cart-details";
export const CartCard = ({ disSnack }) => {
  const { cartState, cartDispatch } = useCartContext();
  return (
    <>
      {cartState.map((item) => {
        const [discountedPrice, savedAmount] = calculateCartItems(
          item.price,
          40
        );
        return (
          <div class="flex flex-direct-col cart-product-container mgn-tp-1 mgn-btm-1 rubik-font border-radius8">
            <div class="flex">
              <div class="product-cart-details">
                <div class="pd-1">{item.name}</div>
                <div class="flex col-gap-1 jc-center">
                  <h3>
                    ₹{(item.qty * discountedPrice).toLocaleString("en-US")}
                  </h3>
                  <del>₹{(item.qty * item.price).toLocaleString("en-US")}</del>
                </div>
                <div class="green-alert-dark-color text-center">
                  You saved ₹ {(item.qty * savedAmount).toLocaleString("en-US")}
                </div>
                <div class="flex col-gap-1 pd-1">
                  <div class="grey-0-5-bdr600 pd-0-5--1 border-radius8">
                    RAM : <span class="font-wt-bold">{item.ram}</span>
                  </div>

                  <div class="grey-0-5-bdr600 pd-0-5--1 border-radius8 item-cart-qty">
                    QTY: <span class="font-wt-bold">{item.qty}</span>
                    <div class="cart-qty-btn-container">
                      {item.qty < 10 ? (
                        <button
                          class="increase-cart-item-qty qty-btn"
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
                          class="increase-cart-item-qty display-btn snck change-btn qty-btn"
                          onClick={() => disSnack("INCREASE")}
                        >
                          +
                        </button>
                      )}
                      {item.qty > 1 ? (
                        <button
                          class="decrease-cart-item-qty qty-btn"
                          onClick={() =>
                            cartDispatch({
                              type: "DECREMENT_CART_ITEMS",
                              payload: item.id,
                            })
                          }
                        >
                          -
                        </button>
                      ) : (
                        <button
                          class="decrease-cart-item-qty qty-btn"
                          onClick={() => disSnack("DECREASE", item.id)}
                        >
                          -
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart-item-img-container">
                <img src={item.image} alt="Iphone" class="cart-item-img" />
              </div>
            </div>

            <div class="flex">
              <button class="remove-from-cart-btn cart-card-btn">Remove</button>
              <button class="move-to-wishlist-btn cart-card-btn">
                Move to Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
