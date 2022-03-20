import { Navbar, Header, GetCategories, Footer } from "../../components/all-comp";
export function Home() {
    return (
      <div>
      <div className="container">
        <Navbar />
        <Header />
      </div>

      <h2>Shop by Categories</h2>
      <GetCategories />
      <Footer />
      </div>
    );
}