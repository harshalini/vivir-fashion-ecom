import { useCategory } from "../../context/allContext";

export function GetCategories() {
  const { category } = useCategory()
  return (
    <div className="shop-by-categories">
    {category.map(({_id, categoryImg}) => (
      <div className="ui-component responsive-image" key = {_id}>
      <img src = {categoryImg} className="image purple-img"></img>
      </div>
      
    ))}
    </div>
  )
}