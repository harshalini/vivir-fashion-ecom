export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, pr_cart: action.payload }
        default:
            return state;
    }
};