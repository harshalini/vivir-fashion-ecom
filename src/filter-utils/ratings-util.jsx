import { useSortedData } from "../context/allContext";
export const ProductRatings = (products) => {
    const { state } = useSortedData();
    switch(state.Pratings) {
        case "4_above":
        return products.filter((item) => item.ratings >= 4);
    case "3_above":
        return products.filter((item) => item.ratings >= 3);
    case "2_above":
        return products.filter((item) => item.ratings >= 2);
    case "1_above":
        return products.filter((item) => item.ratings >= 1);
    default:
        return products;
    }
};