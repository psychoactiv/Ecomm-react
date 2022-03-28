import { React, Fragment, useReducer } from "react";
import { CartCheckout, useSnackbar, CartCard } from "../../components";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "../../components/cartCard/cart-card.css";
export function Cart() {
 
  const { cartState } = useCartContext();
  const { renderSnackbar, decideSnackbarFate } = useSnackbar();

  return (
    <Fragment>
      {cartState.length ? (
        <>
          <div className="flex cart-body-container col-gap-2">
            <div className="product-cart-main">
              <div className="blue-alert-light-bg blue-alert-dark-color free-delivery-dialouge rubik-font border-radius8">
                🚚 yay! you get free delivery with this order and flat 40%
                discount on every item!
              </div>
              <CartCard decideSnackbarFate={decideSnackbarFate} />
            </div>
            <CartCheckout />
          </div>
          {renderSnackbar}
        </>
      ) : (
        <div>Please Add items to cart</div>
      )}
    </Fragment>
  );
}
