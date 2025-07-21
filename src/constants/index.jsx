import MixPlatter from "../assets/mixed-platter.png";
import Pancakes from "../assets/pancakes.png";
import GrilledChicken from "../assets/grilled-chicken.png";
import Steak from "../assets/steak.png";
import Nachos from "../assets/nachos.png";
import GarlicBread from "../assets/garlic-bread.png";
import ChocolateCake from "../assets/chocolate-cake.png";
import Lemonade from "../assets/lemonade.png";

import allIcon from "../assets/icons/all.png";
import breakfastIcon from "../assets/icons/breakfast.png";
import lunchIcon from "../assets/icons/lunch.png";
import dinnerIcon from "../assets/icons/dinner.png";
import dessertIcon from "../assets/icons/dessert.png";
import drinksIcon from "../assets/icons/drink.png";
import snacksIcon from "../assets/icons/snacks.png";
import appetizersIcon from "../assets/icons/appetizers.png";

import {
  FaTachometerAlt,
  FaUsers,
  FaTruck,
  FaShoppingCart,
  FaList,
  FaBox,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

export const menuList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <FaUsers />,
  },
  {
    name: "Delivery",
    path: "/delivery",
    icon: <FaTruck />,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <FaShoppingCart />,
  },
  {
    name: "Menu",
    path: "/menu",
    icon: <FaList />,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: <FaBox />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartBar />,
  },
];

export const categories = [
  {
    name: "All",
    quantities: 200,
    image: allIcon,
  },
  {
    name: "Breakfast",
    quantities: 50,
    image: breakfastIcon,
  },
  {
    name: "Lunch",
    quantities: 50,
    image: lunchIcon,
  },
  {
    name: "Dinner",
    quantities: 50,
    image: dinnerIcon,
  },
  {
    name: "Dessert",
    quantities: 50,
    image: dessertIcon,
  },
  {
    name: "Drinks",
    quantities: 50,
    image: drinksIcon,
  },
  {
    name: "Snacks",
    quantities: 50,
    image: snacksIcon,
  },
  {
    name: "Appetizers",
    quantities: 50,
    image: appetizersIcon,
  },
];

export const menuItems = [
  {
    name: "Mixed Platter",
    amount: 50,
    image: MixPlatter,
  },
  {
    name: "Pancakes",
    amount: 30,
    image: Pancakes,
  },
  {
    name: "Grilled Chicken",
    amount: 40,
    image: GrilledChicken,
  },
  {
    name: "Steak",
    amount: 100,
    image: Steak,
  },
  {
    name: "Chocolate Cake",
    amount: 30,
    image: ChocolateCake,
  },
  {
    name: "Lemonade",
    amount: 20,
    image: Lemonade,
  },
  {
    name: "Nachos",
    amount: 10,
    image: Nachos,
  },
  {
    name: "Garlic Bread",
    amount: 10,
    image: GarlicBread,
  },
];
