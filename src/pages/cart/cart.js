import { Navbar } from "../../components/all-comp";
import { useCart } from "../../context/allContext";
import { CartSummery, TableBar, EmptyBar, CartItem } from "../../components/cart-components/cartComp";
import "./cart1.css"

export function CartPage() {
    document.title = "Vivir Fashion | Cart"
    const { cartState: { pr_cart } } = useCart();
    return (
        <div>
            <div className="container">
                <Navbar />
            </div>
            <h2>My Cart</h2>
            {pr_cart.length > 0 ? <TableBar /> : <EmptyBar />}
            <CartItem />
            <CartSummery />
        </div>
    );
}
