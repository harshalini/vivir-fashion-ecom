import "./ratings.css"
import { useSortedData } from "../../../../context/filter-context"
export function RatingsFilter() {
    const { Pratings, dispatch } = useSortedData()
    return (
        <div className="sort-by-rating">
            <span className="sort-heading">Sort by ratings</span>
            <div className="ratings-filter-div">
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"} name="rate"
                    onChange={() => dispatch({ type: "RATINGS", payload: "4_above" })}
                    checked={Pratings}
                    ></input>
                    4 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"} name="rate"
                    onChange={() => dispatch({ type: "RATINGS", payload: "3_above" })}
                    checked={Pratings}
                    ></input>
                    3 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"} name="rate"
                    onChange={() => dispatch({ type: "RATINGS", payload: "2_above" })}
                    checked={Pratings}
                    ></input>
                    2 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"} name="rate"
                    onChange={() => dispatch({ type: "RATINGS", payload: "1_above" })}
                    checked={Pratings}
                    ></input>
                    1 stars and above
                </label>
            </div>
        </div>
    )
}