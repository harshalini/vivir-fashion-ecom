import { useSortedData } from "../context/filter-context";
export const ProductRatings = (products) => {
    const { state } = useSortedData();
    if (state.Pratings === "4_above")
        return products.filter((item) => item.ratings >= 4);
    else if (state.Pratings === "3_above")
        return products.filter((item) => item.ratings >= 3);
    else if (state.Pratings === "2_above")
        return products.filter((item) => item.ratings >= 2);
    else if (state.Pratings === "1_above")
        return products.filter((item) => item.ratings >= 1);
    return products;
};