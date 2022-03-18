import { v4 } from "uuid";
const FeaturedProd = [
    {
        id: v4(),
        name: "Athena",
        desc: "Women Shoulders top",
        price: 994,
        ratings: 4.4,
        img: "./assets/featured-products/shoulder-top.jpg"
    },
    {
        id: v4(),
        name: "Roadstar",
        desc: "Men printed t-shirt",
        price: 550,
        ratings: 4.3,
        img: "./assets/featured-products/t-shirt.webp"
    },
    {
        id: v4(),
        name: "Levis",
        desc: "Men blue jeans",
        price: 1679,
        ratings: 4.2,
        img: "./assets/featured-products/jeans-deals.jpg"
    },
    {
        id: v4(),
        name: "Urbanic",
        desc: "Women Kurta",
        price: 1299,
        ratings: 4.5,
        img: "./assets/featured-products/dress-deals.webp"
    }
]
export { FeaturedProd };