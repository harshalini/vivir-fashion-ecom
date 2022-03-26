import { useCart } from "../../context/allContext";

export const CartSummery = () => {
    const { cartState: { cart } } = useCart();
    const total = cart.reduce((acc, curr) => acc + curr.discountedPrice * curr.qty, 0)
    if (cart.length > 0) {
        return (
            <div>
            <div className="cprice-container">
                <div>
                    <p>Subtotal</p>
                    <p>Shipping charges</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>Rs. {total}</p>
                    <p>Rs.49</p>
                    <p><strong>Rs. {total + 49}</strong></p>
                </div>
            </div>
             <button className="btn v-btn checkout-btn">Proceed to checkout</button> 
             </div>
        );
    } else return null;
};