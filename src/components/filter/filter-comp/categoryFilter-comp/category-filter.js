import { v4 } from "uuid"
export function CategoryFilter() {
    const menCategory = [
        {
            _id: v4(),
            mcn: "T-shirt"
        },
        {
            _id: v4(),
            mcn: "Jeans"
        }
    ]
    const womenCategory = [
        {
            id: v4(),
            wcn: "Dresses"
        },
        {
            id: v4(),
            wcn: "Saree"
        },
        {
            id: v4(),
            wcn: "Kurta"
        }
    ]
    return (
        <div className="category-filter">
            <span className="sort-heading">Sort by category</span> <br />
            <span className="sort-heading">Men</span>
            <div className="men-categories">
                {menCategory.map((prodCategory) => (
                    <div key={prodCategory.id}>
                    <input type="checkbox" id="tshirt"></input>
                    <label htmlFor="tshirt">{prodCategory.mcn}</label>
                </div>
                ))}
            </div>
            <span className="sort-heading">Women</span>
            <div className="women-categories">
                {womenCategory.map((prodCategory) => (
                    <div key={prodCategory.id}>
                    <input type="checkbox" id="dresses"></input>
                    <label htmlFor="dresses">{prodCategory.wcn}</label>
                </div>
                ))}
            </div>
        </div>

    )
}