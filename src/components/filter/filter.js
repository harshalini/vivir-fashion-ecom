import "../filter/filter.css"
import { SortByPrice, CategoryFilter, RatingsFilter } from "./all-filters"
export function Filter() {
    return (
        <div>
            <input type="checkbox" id="toggle-sidebar" unchecked></input>
            <label htmlFor="toggle-sidebar"><i className="bars-icon fas fa-bars"></i></label>

            <aside className="sidebar">
                <button className="clear-btn">Clear all</button>
                <div className="price-filter">
                    <span className="sort-heading">Filter by price</span>
                    <input type="range" min="350" max="6000"></input>
                </div>

                <SortByPrice />
                <CategoryFilter />
                <RatingsFilter />

            </aside>
        </div>
    )
}