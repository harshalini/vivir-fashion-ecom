import { NavLink } from "react-router-dom";
import { useCart, useWishlist } from "../../context/allContext";
import "../../pages/cart/cart1.css"
import { useAuth } from "../../context/allContext";

export function Navbar() {
  const { cartState: { pr_cart } } = useCart()
  const { wishlistState: { pr_wishlist } } = useWishlist()
  const { authUser, logOutHandler } = useAuth();

  const activeStyle = ({ isActive }) => ({
    borderBottom: isActive ? "dotted 3px var(--orange)" : "none"
  })
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">vivir</NavLink>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Looking for something?" className="search-bar"></input>
      </div>
      <nav>
        <ul className="nav-pages">
          <li>
            <NavLink to="/products" style={activeStyle}>Products</NavLink>
          </li>
          <li>
            <div className="ui-component badge-on-icon">
              <div className="badge">
                <NavLink to="/cart" style={activeStyle}>
                  <i className=" nav-icon fas fa-shopping-cart"></i>
                </NavLink>
                <span className="bg top">{pr_cart.length}</span>
              </div>
            </div>
          </li>
          <li>
            <div className="ui-component badge-on-icon">
              <div className="badge">
                <NavLink to="/wishlist" style={activeStyle}>
                  <i className=" nav-icon fas fa-heart"></i>
                </NavLink>
                <span className="bg top">{pr_wishlist?.length}</span>
              </div>
            </div>
          </li>
          <li>
            {authUser.isUserLoggedIn ?
              <NavLink to="/" style={activeStyle}>
                <i
                  onClick={logOutHandler}
                  className="nav-icon fas fa-power-off">
                </i>
              </NavLink> :
              <NavLink to="/login" style={activeStyle}>
                <i className="nav-icon fas fa-user"></i>
              </NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  );
}
