import { useSortedData } from "../../../../context/filter-context"
export function CategoryFilter() {
    const { state, dispatch } = useSortedData();
    const { subCategories } = state;
    return (
        <div className="category-filter">
            <span className="sort-heading">Sort by category</span> <br />
            <span className="sort-heading">Men</span>
            <div className="men-categories">
                <div>
                    <input type="checkbox" className="category-sort"
                        checked={subCategories.includes("tshirt")}
                        onChange={() =>
                            dispatch({ type: "CATEGORY", payload: 'tshirt' })
                        }
                    ></input>
                    <label htmlFor="category-sort">t-shirt</label>
                </div>
                <div>
                    <input type="checkbox" className="category-sort"
                        checked={subCategories.includes("jeans")}
                        onChange={() =>
                            dispatch({ type: "CATEGORY", payload: 'jeans' })
                        }
                    ></input>
                    <label htmlFor="category-sort">Jeans</label>
                </div>
            </div>
            <span className="sort-heading">Women</span>
            <div className="women-categories">
                <div>
                    <input type="checkbox" className="category-sort"
                        checked={subCategories.includes("dress")}
                        onChange={() =>
                            dispatch({ type: "CATEGORY", payload: 'dress' })
                        }
                    ></input>
                    <label htmlFor="category-sort">Dresses</label>
                </div>
                <div>
                    <input type="checkbox" className="category-sort"
                        checked={subCategories.includes("saree")}
                        onChange={() =>
                            dispatch({ type: "CATEGORY", payload: 'saree' })
                        }
                    ></input>
                    <label htmlFor="category-sort">Saree</label>
                </div>
                <div>
                    <input type="checkbox" className="category-sort"
                        checked={subCategories.includes("kurta")}
                        onChange={() =>
                            dispatch({ type: "CATEGORY", payload: 'kurta' })
                        }
                    ></input>
                    <label htmlFor="category-sort">kurta</label>
                </div>
            </div>
        </div>

    )
}