import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { ProductsPage } from "./pages/productsPage/products";
import Mockman from "mockman-js"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route path = "products" element = {<ProductsPage/>} />
      </Routes>
    </div>
  );
}
export default App;
