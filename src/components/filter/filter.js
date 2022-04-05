import "../filter/filter.css"
import { useSortedData } from "../../context/allContext"
import { SortByPrice, CategoryFilter, RatingsFilter } from "./all-filters"
export function Filter() {
    const { dispatch } = useSortedData()
    return (
        <div>
            <input type="checkbox" id="toggle-sidebar" unchecked = "true"></input>
            <label htmlFor="toggle-sidebar"><i className="bars-icon fas fa-bars"></i></label>

            <aside className="sidebar">
                <button className="clear-btn" onClick={() => dispatch({ type: "CLEAR" })}>Clear all</button>
                <div className="price-filter">
                    <span className="sort-heading">Filter by price</span>
                    <input type="range" min="399" max="5500" step="1000" defaultValue="5500"
                    onChange={(e) => dispatch({type: "SORT-RANGE", payload: e.target.value})}
                    ></input>
                </div>

                <div className="price-slider-pts">
                        <span>.5k</span>
                        <span>1.5k</span>
                        <span>2.5k</span>
                        <span>3.5k</span>
                        <span>4.5k</span>
                        <span>5.5k</span>
                </div>

                <SortByPrice />
                <CategoryFilter />
                <RatingsFilter />

            </aside>
        </div>
    )
}