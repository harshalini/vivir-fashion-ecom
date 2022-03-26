import { createContext, useContext, useReducer } from "react";
import { WishlistRc } from "../reducers/wishlist-reducer";
const wishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishlistRc, {
    wishlist: [],
  });
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};
const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
