import { Navbar } from "../../components/homeComp"
import { GetProducts } from "../../components/products/product-card"
export function ProductsPage() {
    return (
        <div>
        <div class="container product-navbar">
        <Navbar />
        </div>
        <GetProducts />
        </div>
    )
}