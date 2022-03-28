import { React, createContext, useContext, useReducer } from "react";
import { wishlistReducerfn } from "../../utils/wishlist-reducer-fn";

const WishlistContext = createContext(null);

function WishlistProvider({ children }) {
  const [initialWish, dispatchWish] = useReducer(wishlistReducerfn, {
    wishes: [],
    childWishes: [],
  });
  return (
    <WishlistContext.Provider value={{ initialWish, dispatchWish }}>
      {children}
    </WishlistContext.Provider>
  );
}
const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
