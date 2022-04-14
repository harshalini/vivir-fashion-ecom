import { useSortedData } from "../../../../context/allContext"
export function RatingsFilter() {
    const { state: {Pratings}, dispatch } = useSortedData()
    return (
        <div className="sort-by-rating" style={{marginTop: "1rem"}}>
            <span className="sort-heading">Sort by ratings</span>
            <div className="ratings-filter-div">
                {[4, 3, 2, 1].map((num) => (
                    <label htmlFor="rating-input">
                        <input className="rating-input" type="radio" name="rate"
                            onChange={() => dispatch({ type: "RATINGS", payload: `${num}_above` })}
                            checked = {Pratings === `${num}_above`}
                        ></input>
                        {num} stars and above
                    </label>
                ))}
            </div>
        </div>
    )
}