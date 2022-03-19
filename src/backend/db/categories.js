import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    categoryImg: "./assets/categories/men-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "women",
    categoryImg: "./assets/categories/women-category.jpg"
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    categoryImg: "./assets/categories/shoes-category.webp"
  },
];
