import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
          <div className="logo">
           <Link to="">vivir</Link>
          </div>
          <div className="search-input">
            <input type="text" placeholder="Looking for something?"></input>
          </div>
          <nav>
            <ul className="nav-pages">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/display-data">Products</Link>
              </li>
              <li>
                <Link to="/CartPage">
                  <i className="nav-icon fas fa-shopping-cart"></i>
                </Link>
              </li>
              <li>
                <Link to="/wishlistPage">
                  <i className="nav-icon fas fa-heart"></i>
                </Link>
              </li>
              <li>
                <i className="nav-icon fas fa-user"></i>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
  