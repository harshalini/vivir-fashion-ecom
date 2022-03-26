import { useWishlist, useCart } from "../../context/allContext"
export const WishlistItem = () => {
    const { wishlistState: { wishlist }, wishlistDispatch } = useWishlist()
    const { cartState: { cart }, cartDispatch } = useCart()
    return (
        <div className="featured-products wishlist-products">
            {wishlist.map((prod) => {
                return (
                    <div className="ui-component card card-with-shadow">
                        <div className="card-image">
                            <img src={prod.productImg} alt=""></img>
                        </div>
                        <div className="ratings wishlist-ratings">
                            <p>
                                <i className="fas fa-star"></i>
                                {prod.ratings}
                            </p>
                        </div>
                        <i className="wishlist wl-heart fas fa-heart"
                            onClick={() => wishlistDispatch({
                                type: "REMOVE_FROM_WISHLIST",
                                payload: prod
                            })}></i>
                        <div className="card-text">
                            <div className="item-title">
                                <span>{prod.title}</span>
                                <p>{prod.desc}</p>
                            </div>
                            <div className="price">
                                <p>Rs. {prod.discountedPrice}</p>
                            </div>
                        </div>
                        {cart.some((item) => item.id === prod.id) ? (<button
                            className="move-cart-btn">
                            Already in cart
                        </button>) :
                            (<button
                                className="move-cart-btn"
                                onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: prod })
                                }>
                                Move to cart
                            </button>)}
                    </div>
                );
            })}
        </div>
    )
}