import { useSortedData } from "../context/filter-context";
export const GetFliteredProducts = (filteredProducts) => {
    const { state } = useSortedData()
    const { subCategories } = state
  if (subCategories.length !== 0) {
    filteredProducts = filteredProducts.filter((prod) => {
      return subCategories.includes(prod.subCategory);
    });
  } 
  return filteredProducts;
}
