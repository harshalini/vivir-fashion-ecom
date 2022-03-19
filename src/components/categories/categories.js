import { Link } from "react-router-dom"
export function Categories() {
    return (
        <div className="shop-by-categories">
          <div className="ui-component responsive-image">
            <Link to=""><img src="./assets/categories/men-category.jpg" className="image purple-img"></img></Link>
          </div>
          <div className="ui-component responsive-image">
            <Link to=""><img src="./assets/categories/women-category.jpg" className="image purple-img"></img></Link>
          </div>
          <div className="ui-component responsive-image">
            <Link to=""><img src="./assets/categories/shoes-category.webp" className="image purple-img"></img></Link>
          </div>
        </div>
    )
}