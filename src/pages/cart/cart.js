import { Navbar } from "../../components/all-comp";
import { useCart } from "../../context/allContext";
import { CartSummery, TableBar, EmptyBar, CartItem } from "../../components/cart-components/cartComp";
import "./cart.css"
export function CartPage() {
    const { cartState: { cart } } = useCart();
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <h2>My Cart</h2>
            {cart.length > 0 ? TableBar() : EmptyBar()}
            <CartItem />
            <CartSummery />
        </div>
    );
}
