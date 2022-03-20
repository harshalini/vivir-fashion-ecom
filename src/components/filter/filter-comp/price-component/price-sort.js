import "./price.css"
export function SortByPrice() {
    return (
        <div className="sort">
            <span className="sort-heading">Sort by Price</span> <br />
            <div className="price-sort-div">
                <label htmlFor="price-input">
                    <input className="price-input" type={"radio"}></input>
                    Low to high
                </label>
                <label htmlFor="price-input">
                    <input className="price-input" type={"radio"}></input>
                    High to low
                </label>
            </div>
        </div>

    )
}