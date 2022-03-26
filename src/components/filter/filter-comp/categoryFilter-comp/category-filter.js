import { useSortedData } from "../../../../context/allContext"
export function CategoryFilter() {
    const { state, dispatch } = useSortedData();
    const { subCategories } = state;
    return (
        <div className="category-filter">
            <span className="sort-heading">Sort by category</span> <br />
            <span className="sort-heading">Men</span>
            <div className="men-categories">
                <div>
                    <input type="checkbox" id="tshirt-filter"
                        checked={subCategories.includes("tshirt")}
                        onChange={() => dispatch({ type: "CATEGORY", payload: 'tshirt' })}
                    ></input>
                    <label htmlFor="tshirt-filter">t-shirt</label>
                </div>
                <div>
                    <input type="checkbox" id="jeans-filter"
                        checked={subCategories.includes("jeans")}
                        onChange={() => dispatch({ type: "CATEGORY", payload: 'jeans' })}
                    ></input>
                    <label htmlFor="jeans-filter">Jeans</label>
                </div>
            </div>
            <span className="sort-heading">Women</span>
            <div className="women-categories">
                <div>
                    <input type="checkbox" id="dress-filter"
                        checked={subCategories.includes("dress")}
                        onChange={() => dispatch({ type: "CATEGORY", payload: 'dress' })}
                    ></input>
                    <label htmlFor="dress-filter">Dresses</label>
                </div>
                <div>
                    <input type="checkbox" id="saree-filter"
                        checked={subCategories.includes("saree")}
                        onChange={() => dispatch({ type: "CATEGORY", payload: 'saree' })}
                    ></input>
                    <label htmlFor="saree-filter">Saree</label>
                </div>
                <div>
                    <input type="checkbox" id="kurta-filter"
                        checked={subCategories.includes("kurta")}
                        onChange={() => dispatch({ type: "CATEGORY", payload: 'kurta' })}
                    ></input>
                    <label htmlFor="kurta-filter">kurta</label>
                </div>
            </div>
        </div>

    )
}