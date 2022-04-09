import { Link } from "react-router-dom"
export function Header() {
    return (
    <div className="product-container">
          <div className="vivir-header vivir-about">
            <p className="slogan">Live Up Your Fashion</p>
            <p className="info">
              Style yourself with the wide range of exclusive variety! <br /> Make
              your own trends. <br /> Express your uniqueness with Vivir!
            </p>
  
            <button className="btn v-btn explore-btn">
              <Link to="/products" className="page-links">Explore now</Link>
            </button>
          </div>
          <div className="vivir-header vivir-img">
            <img src="../assets/vivir-models.png" alt="img"></img>
          </div>
        </div>
    )
}