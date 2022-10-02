import { useProduct, useWishlist, useCart } from "../../context/allContext";
import { SortedPrice, ProductRatings, GetFliteredProducts, SortByRange, GetGender } from "../../filter-utils/filterUtils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function GetProducts() {
  const { authUser } = useAuth()
  const navigate = useNavigate()
  const { cartState: { pr_cart }, CartProductHandler } = useCart()
  const { WishlistProductHandler, wishlistState: { pr_wishlist }, RemoveWishlistProductHandler } = useWishlist()
  const { product } = useProduct();
  const compose = (...getProd) => (product) => getProd.reduce((data, getProd) => getProd(data), product);
  const filteredProduct = compose(SortedPrice, ProductRatings, GetFliteredProducts, SortByRange, GetGender)(product)

  return (
    <div className="vivir-products">
      <h2 className="all-products">Showing Products ({filteredProduct.length})</h2>
      <div className="product-row">
        {filteredProduct.map((item) => (
          <div className="ui-component card card-with-shadow" key={item._id}>
            <div className="card-image">
              <img src={item.productImg}></img>
            </div>
            <div className="ratings">
              <p><i className="fas fa-star"></i>{item.ratings}</p>
            </div>
            {pr_cart.some((p) => p._id === item._id) ? (
              <button className="addCart-btn"><Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
                Go to cart
              </Link>
              </button>
            ) : (
              <button
                className="addCart-btn"
                onClick={() =>
                  authUser.isUserLoggedIn ?
                    CartProductHandler(item) : navigate("/login")
                }
              >
                Add to cart
              </button>
            )}
            {pr_wishlist?.some((w) => w._id === item._id) ? (
              <i className="wishlist fas fa-heart" style={{ color: "red" }}
                onClick={() =>
                  RemoveWishlistProductHandler(item._id)
                }
              ></i>
            ) : (
              <i
                className="wishlist fas fa-heart"
                onClick={() => authUser.isUserLoggedIn ?
                  WishlistProductHandler(item) : navigate("/login")
                }
              ></i>
            )}
            <div className="card-text">
              <div className="item-title">
                <span>{item.title}</span>
                <p>{item.desc}</p>
              </div>
              <div className="price">
                <p>Rs.{item.discountedPrice}</p>
                <p>Rs.{item.originalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}