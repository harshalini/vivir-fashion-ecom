import { useProduct } from "../../context/productList-context";
import { SortedPrice, ProductRatings, GetFliteredProducts } from "../../filter-utils/filterUtils";
import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";
export function GetProducts() {
  const { cartState: {cart}, cartDispatch } = useCart()
  const { product } = useProduct();
  const getSortedProducts = SortedPrice(product)
  const getRatingProducts = ProductRatings(getSortedProducts)
  const getCategoryProducts = GetFliteredProducts(getRatingProducts)
  return (
      <div className="vivir-products">
      <h2 className="all-products">All Products</h2>
        <div className="product-row">
          {getCategoryProducts.map((item) => (
            <div className="ui-component card card-with-shadow" key = {item._id}>
              <div className="card-image">
                <img src={item.productImg}></img>
              </div>
              <div className="ratings">
                <p><i className="fas fa-star"></i>{item.ratings}</p>
              </div>
              {cart.some((p) => p.id === item.id) ? (
              <button className="addCart-btn"><Link to="/cart">
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
              <i className="wishlist fas fa-heart"></i>

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