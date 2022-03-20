import { Navbar, GetProducts } from "../../components/all-comp"
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