import React from "react";
import logo from "../images/logo.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import data from "./data";
import Meal from "../Interfaces/Meal";
export interface NavProps {
  favFoodList: Array<any>;
  toggle: boolean;
  setToggle: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  setItems: (value: Array<Meal> | ((prevVar: Array<Meal>) => Array<Meal>)) => void;
}
const NavBar = ({ favFoodList, toggle, setToggle, setItems }: NavProps) => {
  const displayFav = () => {
    setToggle(!toggle);
    const red = document.querySelector(".NavHeart")!;

    red.classList.toggle("red");
    if (toggle) {
      setItems(favFoodList);
    } else {
      setItems(data);
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="right">
        <span className="NavHeart">
          <AiOutlineHeart onClick={displayFav} />
        </span>
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default NavBar;
