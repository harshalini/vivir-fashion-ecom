import { useCategory } from "../../context/allContext";
import { Link } from "react-router-dom";
import { useSortedData } from "../../context/filter-context";
export function GetCategories() {
  const { category } = useCategory();
  const { dispatch } = useSortedData();
  return (
    <div className="shop-by-categories">
    {category.map(({_id, categoryImg, categoryName }) => (
      <div>
      <div className="ui-component responsive-image"></div>
    <Link to = {`/products?categoryName=${categoryName}`}
    key = {_id}
    onClick = {() => dispatch({type: "FOR", payload: categoryName})}
    ><img 
    src = {categoryImg} className="image purple-img"></img></Link>
      </div>
    ))}
    </div>
  )
}