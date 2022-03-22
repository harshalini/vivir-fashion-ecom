export const FilterReducer = (state, action) => {
    switch (action.type) {
      case "SORT":
        return { ...state, sortBy: action.payload };
      case 'CATEGORY':
        return { ...state, subCategories: [...state.subCategories, action.payload] }
      case "RATINGS":
        return { ...state, Pratings: action.payload };
      case "CLEAR":
        return {
          sortBy: " ",
          subCategories: "",
          Pratings: 0
        };
      default:
        return state;
    }
  };
 