import { useWishlist, useCart } from "../../context/allContext"
import { Link } from "react-router-dom"

export const WishlistItem = () => {
    const { wishlistState: { pr_wishlist }, RemoveWishlistProductHandler } = useWishlist()
    const { cartState: { pr_cart }, CartProductHandler } = useCart()

    return (
        <div className="featured-products wishlist-products">
            {pr_wishlist?.map((prod) => {
                return (
                    <div className="ui-component card card-with-shadow" key={prod._id}>
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
                            onClick={() => RemoveWishlistProductHandler(prod._id)}></i>
                        <div className="card-text">
                            <div className="item-title">
                                <span>{prod.title}</span>
                                <p>{prod.desc}</p>
                            </div>
                            <div className="price">
                                <p>Rs. {prod.discountedPrice}</p>
                            </div>
                        </div>
                        {pr_cart?.some((item) => item._id === prod._id) ? (<button
                            className="move-cart-btn"><Link to="/cart" className="page-links">Go to cart</Link>
                        </button>) :
                            (<button
                                className="move-cart-btn"
                                onClick={() => {
                                    CartProductHandler(prod._id)
                                    RemoveWishlistProductHandler(prod._id)
                                }}>
                                Move to cart
                            </button>)}
                    </div>
                );
            })}
        </div>
    )
}