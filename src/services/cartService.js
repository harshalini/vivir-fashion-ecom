import axios from "axios"
import { toast } from "react-toastify";

const AddProductToCart = async (product) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/cart`, {
            product
        },
            {
                headers: { authorization: authToken }
            })
        toast.success("Product added to cart")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to add product in cart")
        else
            toast.error("Error occured in adding product to cart")
    }
}

const RemoveProductFromCart = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/cart/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Removed product from cart")
        return res;
    }
    catch (error) {
        toast.error("Error occured while removing product from cart")
    }
}

const UpdateCartQtyService = async (_id, qtyUpdater) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`api/user/cart/${_id}`,
            {
                action: { type: qtyUpdater }
            },
            {
                headers: { authorization: authToken },
            });
        toast.success("Product quantity updated")
        return res.data;
    } catch (error) {
        toast.error("Error occured");
    }
};
export { AddProductToCart, RemoveProductFromCart, UpdateCartQtyService }