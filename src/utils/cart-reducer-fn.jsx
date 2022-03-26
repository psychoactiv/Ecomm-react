const cartReducefn = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      if (state.length === 0) return [{ ...payload, qty: 1 }];
      return state.reduce(
        (acum, cur, i) => {
          if (cur.id === payload.id) {
            acum[i] = { ...payload, qty: acum[i].qty + 1 };
            return acum;
          } else if (acum.some((item) => item.id === payload.id)) {
            return acum;
          } else {
            return [...acum, { ...payload, qty: 1 }];
          }
        },
        [...state]
      );
    case "INCREMENT_CART_ITEMS":
      const found = state.findIndex((item) => item.id === payload);
      const newState = [...state];
      if (state[found].qty > 0 && state[found].qty < 10) {
        newState[found] = { ...newState[found], qty: newState[found].qty + 1 };
        return [...newState];
      }
      return [...newState];
    case "DECREMENT_CART_ITEMS":
      const foundIndex = state.findIndex((item) => item.id === payload);
      const newStateArr = [...state];
      if (state[foundIndex].qty > 1) {
        newStateArr[foundIndex] = {
          ...newStateArr[foundIndex],
          qty: newStateArr[foundIndex].qty - 1,
        };
        return [...newStateArr];
      } else if (state[foundIndex].qty === 1) {
        newStateArr.splice(foundIndex, 1);
      }
      return [...newStateArr];
    case "REMOVE_ITEM":
      const findItemIndex = state.findIndex((item) => item.id === payload);
      const stateArr = [...state];
      stateArr.splice(findItemIndex, 1);
      return [...stateArr];
  }
};

export { cartReducefn };
