import { SiAircanada } from "react-icons/si";
import Scottish from "https://example.com/images/scottish.png";
import Ghana from "https://example.com/images/ghana.png";
import Cali from "https://example.com/images/califonia.png";
import Cana from "https://example.com/images/canada.png";


export const categoriesData = [
    {
        id: 1,
        name: "Electronics",
        products: [
            {
                id: 101,
                name: "Smartphone",
                image: {SiAircanada},
                price: 699.99
            },
            {
                id: 102,
                name: "Laptop",
                image: "https://example.com/images/laptop.jpg",
                price: 1199.99
            }
        ]
    },
    {
        id: 2,
        name: "Home Appliances",
        products: [
            {
                id: 201,
                name: "Air Conditioner",
                image: "https://example.com/images/air-conditioner.jpg",
                price: 499.99
            },
            {
                id: 202,
                name: "Refrigerator",
                image: "https://example.com/images/refrigerator.jpg",
                price: 899.99
            }
        ]
    },
    {
        id: 3,
        name: "Books",
        products: [
            {
                id: 301,
                name: "Fiction Novel",
                image: "https://example.com/images/fiction-novel.jpg",
                price: 19.99
            },
            {
                id: 302,
                name: "Science Textbook",
                image: "https://example.com/images/science-textbook.jpg",
                price: 39.99
            }
        ]
    }
];
export const categoriesData2 = [
    {
        categories: "Scottish",
        image: Scottish,
    },
    {
        categories: "Ghana",
        image: Ghana,
    },
    {
        categories: "Califonia",
        image: Cali,
    },
    {
        categories: "Canada",
        image: Cana,
    }
]