import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    generalCategories: [
      {
        id: uuid(),
        categoryName: "Top-notch Processor",
        image: "./Assets/Images/1-198.jpg",
      },
      {
        id: uuid(),
        categoryName: "High-end GPU for gamers",
        image: "./Assets/Images/download_1_6_4.jpg",
      },
      {
        id: uuid(),
        categoryName: "Pixel perfect Camera for memories",
        image: "./Assets/Images/oppo-reno.webp",
      },
    ],

    brandCategories: [
      {
        id: uuid(),
        brandName: "Apple",
        brandImage:
          "./Assets/Images/58687-logo-computer-apple-icons-free-hd-image.png",
      },
      {
        id: uuid(),
        brandName: "OnePlus",
        brandImage: "./Assets/Images/OnePlus-Rebrand-Red.png",
      },
      {
        id: uuid(),
        brandName: "Samsung",
        brandImage: "./Assets/Images/Samsung-Logo.png",
      },
    ],
  },
];
