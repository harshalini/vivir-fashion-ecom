export function CategoryFilter() {
    return (
        <div className="category-filter">
            <span className="sort-heading">Sort by category</span> <br />
            <span className="sort-heading">Men</span>
            <div className="men-categories">
                <div>
                    <input type="checkbox" id="tshirt"></input>
                    <label htmlFor="tshirt">Tshirt</label>
                </div>
                <div>
                    <input type="checkbox" id="jeans"></input>
                    <label htmlFor="jeans">Jeans</label>
                </div>
            </div>
            <div></div>
            <span className="sort-heading">Women</span>
            <div className="women-categories">
                <div>
                    <input type="checkbox" id="dresses"></input>
                    <label htmlFor="dresses">Dresses</label>
                </div>
                <div>
                    <input type="checkbox" id="saree"></input>
                    <label htmlFor="saree">Saree</label>
                </div>
                <div>
                    <input type="checkbox" id="kurta"></input>
                    <label htmlFor="kurta">Kurta</label>
                </div>
            </div>
        </div>

    )
}