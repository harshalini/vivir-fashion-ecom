export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case 'CATEGORY':
      return { ...state, subCategories: [...state.subCategories, action.payload] }
    case "REMOVE-TSHIRT":
      return { ...state, subCategories: state.subCategories.filter((prodCat) => prodCat !== "tshirt") }
    case "REMOVE-JEANS":
      return { ...state, subCategories: state.subCategories.filter((prodCat) => prodCat !== "jeans") }
    case "REMOVE-DRESS":
      return { ...state, subCategories: state.subCategories.filter((prodCat) => prodCat !== "dress") }
    case "REMOVE-SAREE":
      return { ...state, subCategories: state.subCategories.filter((prodCat) => prodCat !== "saree") }
    case "REMOVE-KURTA":
      return { ...state, subCategories: state.subCategories.filter((prodCat) => prodCat !== "kurta") }
    case "RATINGS":
      return { ...state, Pratings: action.payload };
    case "CLEAR":
      return {
        sortBy: "",
        subCategories: "",
        Pratings: null
      };
    default:
      return state;
  }
};
