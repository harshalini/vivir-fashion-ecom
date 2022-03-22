import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducers/filter-reducer";
const sortFiltercontext = createContext();

const SortFilterDataProvider = ({ children }) => {
  
  const [
    state,
    dispatch
  ] = useReducer(FilterReducer, {
    sortBy: " ",
    subCategories: "",
    Pratings: 0
  });

  return (
    <sortFiltercontext.Provider value={{ state, dispatch }}>
      {children}
    </sortFiltercontext.Provider>
  );
};
const useSortedData = () => useContext(sortFiltercontext);

export { useSortedData, SortFilterDataProvider };
