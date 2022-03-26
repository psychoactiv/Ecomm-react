const initialSnackbarVal = {
  displayStatus: "hidden-snackbar",
  snacbarValue: "",
  snackbarWithButton: false,
  itemId: "",
};

function snacbarReducerfn(state, { type, payload, item_ID }) {
  switch (type) {
    case "INCREASE":
      return {
        ...state,
        displayStatus: payload,
        snacbarValue: "Maximum item quantity reached",
        snackbarWithButton: false,
        itemId: item_ID,
      };
    case "DECREASE":
      return {
        ...state,
        displayStatus: payload,
        snacbarValue: "Do you want to remove the item?",
        snackbarWithButton: "yes",
        itemId: item_ID,
      };
    case "CLOSE_SNACK":
      return { initialSnackbarVal };
  }
  return { ...state };
}

export { snacbarReducerfn, initialSnackbarVal };
