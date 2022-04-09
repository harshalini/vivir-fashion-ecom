import { useCategory } from "../../context/allContext";
import { Link } from "react-router-dom";
import { useSortedData } from "../../context/filter-context";
export function GetCategories() {
  const { category } = useCategory();
  const { state: {idealFor}, dispatch} = useSortedData();
  return (
    <div className="shop-by-categories">
    {category.map(({_id, categoryImg, categoryName }) => (
      <div>
      <div className="ui-component responsive-image" key = {_id}>
      <img 
      src = {categoryImg} className="image purple-img"></img>
      </div>
      <Link to = {`/products`}>
      <div className="cat-ip">
      <input type="checkbox" id="cat-checkbox"
      onChange={() => dispatch({type: "FOR", payload: categoryName})}
      checked = {idealFor.includes(categoryName)}
      ></input>
      </div> 
      </Link>
      </div>
    ))}
    </div>
  )
}