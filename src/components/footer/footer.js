import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer div="web-footer">
          <div className="get-app">
            <span>Download our app</span>
            <div className="app-badges">
              <Link to=""><img src="./assets/app-badge/google-play-badge.png"></img></Link>
              <Link to=""><img src="./assets/app-badge/app-store.png"></img></Link>
            </div>
          </div>
          <div className="footer-logo">
            <div className="logo">
              vivir
            </div>
            <div className="shopping-categories">
              <span>Online shopping</span>
              <p>Men</p>
              <p>Women</p>
              <p>Footwear</p>
            </div>
          </div>
          <div className="useful-links">
            <span>Useful links</span>
            <div className="ui-component spaced-list">
              <ul className="sl-ul">
                <li><Link to="">Contact Us</Link></li>
                <li><Link to="">FAQ</Link></li>
                <li><Link to="">Blog</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-social-links">
            <span>Connect with us</span>
            <div className="footer-links">
              <Link to=""><i className="fab fa-instagram"></i></Link>
              <Link to=""><i className="fab fa-facebook"></i></Link>
              <Link to=""><i className="fab fa-twitter"></i></Link>
              <Link to=""><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          
        </footer>
    )
}