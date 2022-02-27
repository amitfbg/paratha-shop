import PlainParathaImg from "./assets/images/paratha4.jpg";
import AaluParathaImg from "./assets/images/paratha2.jpg";
import VegParathaImg from "./assets/images/paratha3.jpg";
import CheeseParathaImg from "./assets/images/paratha5.jpg";
import CornParathaImg from "./assets/images/paratha1.jpg";

export const ParathaList = [
  { label: "Plain paratha + Yogurt", value: 40, img: PlainParathaImg },
  { label: "Aalo Paratha", value: 50, img: AaluParathaImg },
  { label: "Veg Paratha", value: 50, img: VegParathaImg },
  { label: "Double Cheese Paratha", value: 70, img: CheeseParathaImg },
  { label: "Corn Cheese Paratha", value: 80, img: CornParathaImg },
];

export const parathaToppings = {
  "Plain paratha + Yogurt": ["Extra Sauce"],
  "Aalo Paratha": ["Extra Sauce", "Yogurt", "Cheese"],
  "Veg Paratha": ["Corn", "Cabbage", "Fenugreek", "Cheese"],
  "Double Cheese Paratha": ["Extra Sauce", "Yogurt", "Corn"],
  "Corn Cheese Paratha": ["Extra Sauce", "Yogurt", "Cheese"],
};

export const toppingsPrics = {
  "Extra Sauce": 5,
  Yogurt: 15,
  Cheese: 20,
  Corn: 10,
  Cabbage: 15,
  Fenugreek: 10,
};

export const deliveryCharges = [
  { label: "Upto 5 km", value: 0 },
  { label: "5-8 km", value: 15 },
  { label: "9-15 km", value: 25 },
  { label: "Above 15 km", value: 40 },
];
