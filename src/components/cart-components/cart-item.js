import { useCart } from "../../context/allContext";
export const CartItem = () => {
    const { cartState: { cart }, cartDispatch } = useCart()
    return (
        <div>
            {cart.map((prod) => {
                return (
                    <div className="cart-product"
                        key={prod.id}
                        style={{ marginBottom: "2.5rem" }}>
                        <div className="cart-item">
                            <img src={prod.productImg} alt=""></img>
                            <div className="item-details">
                                <p className="cart-title">{prod.title}</p>
                                <p className="cart-desc">{prod.desc}</p>
                                <small className="item-price">Price: Rs. {prod.discountedPrice}</small> <br />
                                <button className="remove-btn"
                                    onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })}>
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="quantity">
                            <select value={prod.qty}
                                onChange={(e) =>
                                    cartDispatch({ type: "CHANGE_CART_QTY", payload: {
                                            id: prod.id,
                                            qty: e.target.value
                                        }
                                    })}>
                                {[...Array(prod.quantity).keys()].map((x) => (
                                    <option key={x + 1}>{x + 1}</option>
                                ))}
                            </select>
                        </div>
                        <p className="cart-price">Rs. {prod.discountedPrice * prod.qty}</p>
                    </div>
                );
            })}
        </div>
    )
}
