import { useSortedData } from "../context/allContext";
export const GetFliteredProducts = (filteredProducts) => {
  const { state } = useSortedData()
  const { subCategories } = state
  subCategories.length !== 0 ?
    filteredProducts = filteredProducts.filter(({ subCategory }) => subCategories.includes(subCategory)) :
    filteredProducts;
  return filteredProducts;
}
