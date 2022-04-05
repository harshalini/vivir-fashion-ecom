import { useSortedData } from "../context/allContext";
export const GetFliteredProducts = (filteredProducts) => {
  const { state } = useSortedData()
  const { subCategories } = state
  subCategories.length !== 0 ?
    filteredProducts = filteredProducts.filter(({ subCategory }) => subCategories.includes(subCategory)) :
    filteredProducts;
  return filteredProducts;
}

export const GetGender = (data) => {
  const { state: {gCategories}} = useSortedData();
  gCategories.length !== 0 ?
    data = data.filter(({ categoryName }) => gCategories.includes(categoryName)) :
    data;
  return data;
}
