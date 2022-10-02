import axios from "axios"
import { toast } from "react-toastify"

const AddProductToWishlist = async (product) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/user/wishlist`, {
            product
        },
            {
                headers: { authorization: authToken }
            })
        toast.success("Product wishlisted")
        return res;
    }
    catch (error) {
        if (!authToken)
            toast.error("Login to wishlist a product")
        else
            toast.error("Error occured in wishlisting product")
    }
}

const RemoveProductFromWishlist = async (_id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
            headers: { authorization: authToken }
        })
        toast.success("Removed product from wishlist")
        return res;
    }
    catch (error) {
        toast.error("Error while removing video from error")
    }
}
export { AddProductToWishlist, RemoveProductFromWishlist }