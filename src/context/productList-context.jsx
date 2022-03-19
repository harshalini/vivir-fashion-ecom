import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const ProductContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products }
        } = await axios.get("/api/products");
        setProduct(products);
      } catch {
        console.error("an error occured");
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };