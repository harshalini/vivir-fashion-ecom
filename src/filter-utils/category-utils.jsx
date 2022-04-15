import { useSortedData } from "../context/allContext";
export const GetFliteredProducts = (filteredProducts) => {
  const { state: { subCategories } } = useSortedData()
  subCategories.length !== 0 ?
    filteredProducts = filteredProducts.filter(({ subCategory }) => subCategories.includes(subCategory)) :
    filteredProducts;
  return filteredProducts;
}

export const GetGender = (data) => {
  const { state: { idealFor } } = useSortedData();
  idealFor.length !== 0 ?
    data = data.filter(({ categoryName }) => idealFor.includes(categoryName)) :
    data;
  return data;
}
