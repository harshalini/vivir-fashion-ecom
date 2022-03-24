import { Navbar } from "../../components/all-comp";
import { useCart } from "../../context/cart-context";
import { CartSummery, TableBar, EmptyBar, CartItem } from "../../components/cart-components/cartComp";
import "./cart.css"
export function CartPage() {
    const { cartState: { cart } } = useCart();
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            {cart.length > 0 ? TableBar() : EmptyBar()}
            <CartItem />
            <CartSummery />
        </div>
    );
}
