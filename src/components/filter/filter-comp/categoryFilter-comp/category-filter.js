import { useSortedData } from "../../../../context/allContext"
export function CategoryFilter() {
    const { state, dispatch } = useSortedData();
    const { idealFor, subCategories } = state;

    const clickCategory = (e) => {
        e.target.checked ? dispatch({ type: "FOR", payload: e.target.value }) : dispatch({ type: `remove-${e.target.value}`.toUpperCase() })
    }

    const clickSubCategory = (e) => {
        e.target.checked ? dispatch({ type: "CATEGORY", payload: e.target.value }) : dispatch({ type: `remove-${e.target.value}`.toUpperCase() })
    }
    return (
        <div className="category-filter">
            <span className="sort-heading">Sort by category</span> <br />
            <input type="checkbox" id="men-category" value="men"
                onChange={(e) => clickCategory(e)}
                checked={idealFor.includes("men")}
            />
            <span className="sort-heading" htmlFor="men-category">Men</span>
            <div className="men-categories">
                <div>
                    <input type="checkbox" id="tshirt-filter" value="tshirt"
                        checked={subCategories.includes("tshirt")}
                        onChange={(e) => clickSubCategory(e)}
                    ></input>
                    <label htmlFor="tshirt-filter">t-shirt</label>
                </div>
                <div>
                    <input type="checkbox" id="jeans-filter" value="jeans"
                        checked={subCategories.includes("jeans")}
                        onChange={(e) => clickSubCategory(e)}
                    ></input>
                    <label htmlFor="jeans-filter">Jeans</label>
                </div>
            </div>
            <input type="checkbox" id="women-category" value="women"
                onChange={(e) => clickCategory(e)}
                checked={idealFor.includes("women")}
            />
            <span className="sort-heading" htmlFor="women-category">Women</span>
            <div className="women-categories">
                <div>
                    <input type="checkbox" id="dress-filter" value="dress"
                        checked={subCategories.includes("dress")}
                        onChange={(e) => clickSubCategory(e)}
                    ></input>
                    <label htmlFor="dress-filter">Dresses</label>
                </div>
                <div>
                    <input type="checkbox" id="saree-filter" value="saree"
                        checked={subCategories.includes("saree")}
                        onChange={(e) => clickSubCategory(e)}
                    ></input>
                    <label htmlFor="saree-filter">Saree</label>
                </div>
                <div>
                    <input type="checkbox" id="kurta-filter" value="kurta"
                        checked={subCategories.includes("kurta")}
                        onChange={(e) => clickSubCategory(e)}
                    ></input>
                    <label htmlFor="kurta-filter">kurta</label>
                </div>
            </div>
            <input type="checkbox" id="men-category" value="shoes"
                onChange={(e) => clickCategory(e)}
                checked={idealFor.includes("shoes")}
            />
            <span className="sort-heading" htmlFor="men-category">Shoes</span>
        </div>

    )
}