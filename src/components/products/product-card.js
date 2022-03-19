import { useProduct } from "../../context/productList-context";
export function GetProducts() {
  const { product } = useProduct();
  return (
    <div class="product-flex">   
      <div className="vivir-products">
        <div className="product-row">
          {product.map((item) => (
            <div class="ui-component card card-with-shadow" key = {item._id}>
              <div class="card-image">
                <img src={item.productImg}></img>
              </div>
              <div class="ratings">
                <p><i class="fas fa-star"></i>{item.ratings}</p>
              </div>
              <button class="addCart-btn">Add to cart</button>
              <i class="wishlist fas fa-heart"></i>

              <div class="card-text">
                <div class="item-title">
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
                <div class="price">
                  <p>Rs.{item.discountedPrice}</p>
                  <p>Rs.{item.originalPrice}</p>
                  <p>(55% off)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}