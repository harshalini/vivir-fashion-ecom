import { Navbar } from "../../components/shared/navbar";
import { Header } from "../../components/header/header";
import { HomePageCard } from "../../components/home-products/homeProd-card";
import { Categories } from "../../components/categories/categories";
import { Footer } from "../../components/footer/footer";
export function Home() {
    return (
      <div>
      <div className="container">
        <Navbar />
        <Header />
      </div>
      <h2>Featured Products</h2>
      <HomePageCard />

      <h2>Shop by Categories</h2>
      <Categories />
      <Footer />
      </div>
    );
}