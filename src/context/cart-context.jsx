import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers/cart-reducer";
import { AddProductToCart, RemoveProductFromCart, UpdateCartQtyService } from "../services/cartService";
import axios from "axios";

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, { pr_cart: [] })

    const authToken = localStorage.getItem("authToken")
    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { cart }
                } = await axios.get('/api/user/cart', {
                    headers: { authorization: authToken }
                });
                cartDispatch({ type: "ADD_TO_CART", payload: cart })
            } catch (error) {
                console.log(error);
            }
        })();
    }, [cartState.pr_cart]);

    const CartProductHandler = async (prod) => {
        const response = await AddProductToCart(prod)
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart })
        console.log(response.data.cart)
    }

    const RemoveCartProductHandler = async (_id) => {
        const response = await RemoveProductFromCart(_id)
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart })
        console.log(response.data.cart)
    }

    const UpdateCartQuant = async (_id, qtyUpdater) => {
        const response = await UpdateCartQtyService(_id, qtyUpdater);
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart })
        console.log(response.data.cart)
    };

    return (
        <cartContext.Provider value={{
            cartState,
            cartDispatch,
            CartProductHandler,
            RemoveCartProductHandler,
            UpdateCartQuant
        }}>
            {children}
        </cartContext.Provider>
    )
}
const useCart = () => useContext(cartContext)

export { useCart, CartProvider }