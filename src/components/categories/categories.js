import { useCategory } from "../../context/allContext";
import { Link } from "react-router-dom";
export function GetCategories() {
  const { category } = useCategory();
  return (
    <div className="shop-by-categories">
    {category.map(({_id, categoryImg, categoryName }) => (
      <div className="ui-component responsive-image" key = {_id}>
      <Link to = "/products"><img src = {categoryImg} className="image purple-img"></img></Link>
      </div> 
    ))}
    </div>
  )
}