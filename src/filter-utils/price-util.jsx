import { useSortedData } from "../context/allContext";
    export const SortedPrice = (data) => {
      const { state } = useSortedData();
      if (state.sortBy === "High_to_low") return [...data].sort((a, b) => b.discountedPrice - a.discountedPrice);
      else if (state.sortBy === "Low_to_high")
        return [...data].sort((a, b) => a.discountedPrice - b.discountedPrice);
      return data;
    }