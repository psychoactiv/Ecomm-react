function wishlistReducerfn({ wishes, childWishes }, { type, payload }) {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return wishes.some((item) => item.id === payload.id)
        ? { wishes: [...wishes], childWishes: [...childWishes] }
        : {
            wishes: [...wishes, { ...payload }],
            childWishes: [...childWishes, { id: payload.id, status: true }],
          };
    case "REMOVE_FROM_WISHLIST":
      const newWishArr = [...wishes];
      const newChildWish = [...childWishes];
      const arrIndex = wishes.findIndex((item) => item.id === payload.id);
      const payloadIndex = newChildWish.findIndex(
        (item) => item.id === payload.id
      );
      newWishArr.splice(arrIndex, 1);
      newChildWish.splice(payloadIndex, 1);
      return { wishes: [...newWishArr], childWishes: [...newChildWish] };
  }
}

export { wishlistReducerfn };
