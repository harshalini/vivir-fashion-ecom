import { createContext, useContext, useReducer, useEffect } from "react";
import { WishlistRc } from "../reducers/wishlist-reducer";
import { AddProductToWishlist, RemoveProductFromWishlist } from "../services/wishlistService";
import axios from "axios";
const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishlistRc, {
    pr_wishlist: [],
  });

  const authToken = localStorage.getItem("authToken")
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { wishlist }
        } = await axios.get('/api/user/wishlist', {
          headers: { authorization: authToken }
        });
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist })
      } catch (error) {
        console.log(error);
      }
    })();
  }, [wishlistState.pr_wishlist]);

  const WishlistProductHandler = async (prod) => {
    const response = await AddProductToWishlist(prod)
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response?.data.wishlist })
    console.log(response?.data.wishlist)
  }

  const RemoveWishlistProductHandler = async (_id) => {
    const response = await RemoveProductFromWishlist(_id)
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist })
    console.log(response.data.wishlist)
  }

  return (
    <wishlistContext.Provider value={{
      wishlistState,
      wishlistDispatch,
      WishlistProductHandler,
      RemoveWishlistProductHandler
    }}>
      {children}
    </wishlistContext.Provider>
  );
};
const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
