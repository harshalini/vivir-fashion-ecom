import { useProduct } from "../../context/productList-context";
export function GetProducts() {
  const { product } = useProduct();
  return (
      <div className="vivir-products">
      <h2 className="all-products">All Products</h2>
        <div className="product-row">
          {product.map((item) => (
            <div className="ui-component card card-with-shadow" key = {item._id}>
              <div className="card-image">
                <img src={item.productImg}></img>
              </div>
              <div className="ratings">
                <p><i className="fas fa-star"></i>{item.ratings}</p>
              </div>
              <button className="addCart-btn">Add to cart</button>
              <i className="wishlist fas fa-heart"></i>

              <div className="card-text">
                <div className="item-title">
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
                <div className="price">
                  <p>Rs.{item.discountedPrice}</p>
                  <p>Rs.{item.originalPrice}</p>
                  <p>(55% off)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}