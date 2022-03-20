import "./ratings.css"

export function RatingsFilter() {
    return (
        <div class="sort-by-rating">
            <span class="sort-heading">Sort by ratings</span>
            <div className="ratings-filter-div">
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"}></input>
                    4 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"}></input>
                    3 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"}></input>
                    2 stars and above
                </label>
                <label htmlFor="rating-input">
                    <input className="rating-input" type={"radio"}></input>
                    1 stars and above
                </label>
            </div>
        </div>
    )
}