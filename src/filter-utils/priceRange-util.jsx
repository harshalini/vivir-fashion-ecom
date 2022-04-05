import { useSortedData } from "../context/filter-context";
export const SortByRange = (data) => {
    const { state: {sortRange}} = useSortedData();
    (sortRange !== 0) ?
      data = data.filter((item) => sortRange >= item.discountedPrice) : data;
    return data;
  };