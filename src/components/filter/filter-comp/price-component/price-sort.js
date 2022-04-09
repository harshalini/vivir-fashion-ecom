import "./price.css"
import { useSortedData } from "../../../../context/allContext"
export function SortByPrice() {
    const { state: {sortBy}, dispatch } = useSortedData()
    return (
        <div className="sort">
            <span className="sort-heading">Sort by Price</span> <br />
            <div className="price-sort-div">
                <label htmlFor="price-input">
                    <input className="price-input" type="radio" name = "sort"
                    onChange = {() => dispatch({type: "SORT", payload: "Low_to_high"})}
                    checked = {sortBy === "Low_to_high"}
                    />
                    Low to high
                </label>
                <label htmlFor="price-input">
                    <input className="price-input" type="radio" name = "sort"
                    onChange={() => dispatch({type: "SORT", payload: "High_to_low"})}
                    checked = {sortBy === "High_to_low"}
                    ></input>
                    High to low
                </label>
            </div>
        </div>

    )
}