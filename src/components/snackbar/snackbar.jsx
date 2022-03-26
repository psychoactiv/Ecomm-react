import { React, Fragment } from "react";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "./snackbar.css";
export function Snackbar({
  displayMsg,
  toggleSnackbar,
  updateSnackbar,
  snackbarWithButton,
  itemId,
}) {
  const { cartDispatch } = useCartContext();
  function cancelSnackbar() {
    updateSnackbar({ type: "CLOSE_SNACK", payload: "hidden-snackbar" });
  }
  return (
    <Fragment>
      <div class=" hidden-snackbar">
        <div class={`snack ${toggleSnackbar} snacked`}>
          <div>{displayMsg}</div>
          {snackbarWithButton ? (
            <button
              className="yes-btn"
              onClick={() =>
                cartDispatch({ type: "REMOVE_ITEM", payload: itemId })
              }
            >
              {snackbarWithButton}
            </button>
          ) : null}
          <button class="cancel-snackbar" onClick={cancelSnackbar}>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
