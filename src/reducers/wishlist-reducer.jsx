export const WishlistRc = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload }]
        };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlist: state.wishlist.filter((w) => w.id !== action.payload.id)
        };
      default:
        return state;
    }
  };