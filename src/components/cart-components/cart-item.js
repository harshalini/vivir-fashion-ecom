import { useCart, useWishlist } from "../../context/allContext";
import { Link } from "react-router-dom";
export const CartItem = () => {
    const { cartState: { cart }, cartDispatch } = useCart();
    const { wishlistState: { wishlist }, wishlistDispatch } = useWishlist();
    return (
        <div className="cart-div">
            {cart.map((prod) => {
                return (
                    <div className="cart-product item-in-cart"
                        key={prod.id}
                        style={{ marginBottom: "2.5rem" }}>
                        <div className="cart-item">
                            <img src={prod.productImg} alt=""></img>
                            <div className="item-details">
                                <p className="cart-title">{prod.title}</p>
                                <p className="cart-desc">{prod.desc}</p>
                                <small className="item-price">Price: Rs. {prod.discountedPrice}</small> <br />
                                <div className="cart-btns">
                                    <button className="remove-btn"
                                        onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })}>
                                        Remove
                                    </button>
                                    {wishlist.some((item) => item.id === prod.id) ? (<button
                                        className="move-cart-btn w-btn"><Link to="/wishlist" className = "page-links">Go to wishlist</Link>
                                    </button>) :
                                        (<button
                                            className="move-cart-btn w-btn"
                                            onClick={() => wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: prod })
                                            }>
                                            Add to wishlist
                                        </button>)}
                                </div>
                            </div>
                        </div>
                        <div className="quantity">
                            <select value={prod.qty}
                                onChange={(e) =>
                                    cartDispatch({
                                        type: "CHANGE_CART_QTY", payload: {
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
