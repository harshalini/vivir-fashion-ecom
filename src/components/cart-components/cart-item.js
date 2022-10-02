import { useCart, useWishlist } from "../../context/allContext";
import { Link } from "react-router-dom";

export const CartItem = () => {
    const { cartState: { pr_cart }, RemoveCartProductHandler, UpdateCartQuant } = useCart();
    const { wishlistState: { pr_wishlist }, WishlistProductHandler } = useWishlist();

    return (
        <div className="cart-div">
            {pr_cart.map((prod) => {
                return (
                    <div className="cart-product item-in-cart"
                        key={prod._id}
                        style={{ marginBottom: "2.5rem" }}>
                        <div className="cart-item">
                            <img src={prod.productImg} alt=""></img>
                            <div className="item-details">
                                <p className="cart-title">{prod.title}</p>
                                <p className="cart-desc">{prod.desc}</p>
                                <small className="item-price">Price: Rs. {prod.discountedPrice}</small> <br />
                                <div className="cart-btns">
                                    <button className="remove-btn"
                                        onClick={() => RemoveCartProductHandler(prod._id)}>
                                        Remove
                                    </button>
                                    {pr_wishlist.some((item) => item.id === prod.id) ? (<button
                                        className="move-cart-btn w-btn"><Link to="/wishlist" className="page-links">Go to wishlist</Link>
                                    </button>) :
                                        (<button
                                            className="move-cart-btn w-btn"
                                            onClick={() => WishlistProductHandler(prod)
                                            }>
                                            Add to wishlist
                                        </button>)}
                                </div>
                            </div>
                        </div>
                        <div className="quantity">
                            <button className="update-btn"
                                onClick={() => prod.qty === 1 ?
                                    RemoveCartProductHandler(prod._id) :
                                    UpdateCartQuant(prod._id, "decrement")}>
                                -
                            </button>
                            <p>{prod.qty}</p>
                            {prod.qty === prod.quantity ?
                                <button
                                    disabled={true}
                                    className="update-btn disable"
                                >+</button> 
                                :
                                <button className="update-btn not-disable"
                                    onClick={() => UpdateCartQuant(prod._id, "increment")}
                                >+</button>
                            }
                        </div>
                        <p className="cart-price">Rs. {prod.discountedPrice * prod.qty}</p>
                    </div>
                );
            })}
        </div>
    )
}
