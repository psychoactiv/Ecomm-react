import { React, Fragment, useReducer } from "react";
import { CartCheckout, Snackbar, CartCard } from "../../components";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "../../components/cartCard/cart-card.css";
import {
  snacbarReducerfn,
  initialSnackbarVal,
} from "../../utils/snacbar-reducerfn";
export function Cart() {
  // Snackbar display function
  const { cartState } = useCartContext();
  const [displaySnack, snackbarDispatch] = useReducer(
    snacbarReducerfn,
    initialSnackbarVal
  );
  function decideSnackbarFate(type, itemID) {
    snackbarDispatch({ type: type, payload: "show-snackbar", item_ID: itemID });
    setTimeout(() => {
      snackbarDispatch({
        type: type,
        payload: "hidden-snackbar",
      });
    }, 3000);
  }
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
              <CartCard disSnack={decideSnackbarFate} />
            </div>
            <CartCheckout />
          </div>
          <Snackbar
            displayMsg={displaySnack.snacbarValue}
            toggleSnackbar={displaySnack.displayStatus}
            itemId={displaySnack.itemId}
            updateSnackbar={snackbarDispatch}
            snackbarWithButton={displaySnack.snackbarWithButton}
          />
        </>
      ) : (
        <div>Please Add items to cart</div>
      )}
    </Fragment>
  );
}
