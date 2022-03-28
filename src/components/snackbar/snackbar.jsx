import { React, Fragment, useReducer } from "react";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import "./snackbar.css";
import {
  snacbarReducerfn,
  initialSnackbarVal,
} from "../../utils/snacbar-reducerfn";

function useSnackbar() {
  const [displaySnack, snackbarDispatch] = useReducer(
    snacbarReducerfn,
    initialSnackbarVal
  );
  const { cartDispatch } = useCartContext();

  function decideSnackbarFate(type, itemID) {
    snackbarDispatch({
      type: type,
      payload: "show-snackbar",
      item_ID: itemID,
    });
    setTimeout(() => {
      snackbarDispatch({
        type: type,
        payload: "hidden-snackbar",
      });
    }, 3000);
  }
  function cancelSnackbar() {
    console.log("here");
    snackbarDispatch({
      type: "CLOSE_SNACK",
      payload: "hidden-snackbar",
    });
  }

  return {
    decideSnackbarFate,
    cancelSnackbar,
    renderSnackbar: (
      <Fragment>
        <div className=" hidden-snackbar">
          <div className={`snack ${displaySnack.displayStatus} snacked`}>
            <div>{displaySnack.snacbarValue}</div>
            {displaySnack.snackbarWithButton ? (
              <button
                className="yes-btn"
                onClick={() => {
                  cartDispatch({
                    type: "REMOVE_ITEM",
                    payload: displaySnack.itemId,
                  });
                  cancelSnackbar();
                }}
              >
                {displaySnack.snackbarWithButton}
              </button>
            ) : null}
            <button className="cancel-snackbar" onClick={cancelSnackbar}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </Fragment>
    ),
  };
}

export { useSnackbar };
