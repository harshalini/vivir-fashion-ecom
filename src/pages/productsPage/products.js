import { Navbar, GetProducts, Filter } from "../../components/all-comp"
export function ProductsPage() {
    document.title = "Vivir Fashion | Products"

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