export const WishlistRc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, pr_wishlist: action.payload }
    default:
      return state;
  }
};