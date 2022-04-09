import { useProduct, useWishlist, useCart } from "../../context/allContext";
import { SortedPrice, ProductRatings, GetFliteredProducts, SortByRange, GetGender } from "../../filter-utils/filterUtils";
import { Link } from "react-router-dom";
export function GetProducts() {
  const { cartState: {cart}, cartDispatch } = useCart()
  const { wishlistState: { wishlist }, wishlistDispatch } = useWishlist();
  const { product } = useProduct();
  const compose = (...getProd) => (product) =>getProd.reduce((data , getProd) =>getProd(data), product);
  const filteredProduct = compose( SortedPrice , ProductRatings , GetFliteredProducts, SortByRange, GetGender ) ( product )
  return (
      <div className="vivir-products">
      <h2 className="all-products">Showing Products ({filteredProduct.length})</h2>
        <div className="product-row">
          {filteredProduct.map((item) => (
            <div className="ui-component card card-with-shadow" key = {item._id}>
              <div className="card-image">
                <img src={item.productImg}></img>
              </div>
              <div className="ratings">
                <p><i className="fas fa-star"></i>{item.ratings}</p>
              </div>
              {cart.some((p) => p.id === item.id) ? (
              <button className="addCart-btn"><Link to="/cart" style={{textDecoration: "none", color: "black"}}>
                Go to cart
              </Link>
              </button>
            ) : (
              <button
                className="addCart-btn"
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: item })
                }
              >
                Add to cart
              </button>
            )}
             {wishlist.some((w) => w.id === item.id) ? (
              <i className="wishlist fas fa-heart" style={{ color: "red" }}
              onClick={() => 
                wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
              }
              ></i>
            ) : (
              <i
                className="wishlist fas fa-heart"
                onClick={() => 
                  wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item })
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