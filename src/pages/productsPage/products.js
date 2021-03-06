import { Navbar, GetProducts, Filter } from "../../components/all-comp"
export function ProductsPage() {
    return (
        <div>
            <div className="container product-navbar">
                <Navbar />
            </div>
            <div className="product-flex">
                <Filter />
                <GetProducts />
            </div>
        </div>
    )
}