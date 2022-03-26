import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context/allContext";
import "../../pages/cart/cart.css"
export function Navbar() {
  const { cartState: { cart } } = useCart()
  const { wishlistState: { wishlist } } = useWishlist()
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">vivir</Link>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Looking for something?"></input>
      </div>
      <nav>
        <ul className="nav-pages">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
          <div className="ui-component badge-on-icon">
                <div className="badge">
                    <Link to = "/cart">
                        <i className=" nav-icon fas fa-shopping-cart"></i>
                    </Link>
                    <span className="bg top">{cart.length}</span>
                </div>
            </div>
          </li>
          <li>
          <div className="ui-component badge-on-icon">
                <div className="badge">
                    <Link to = "/wishlist">
                        <i className=" nav-icon fas fa-heart"></i>
                    </Link>
                    <span className="bg top">{wishlist.length}</span>
                </div>
            </div>
          </li>
            <li>
              <i className="nav-icon fas fa-user"></i>
            </li>
        </ul>
      </nav>
    </div>
  );
}
