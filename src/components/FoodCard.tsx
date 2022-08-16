import React, { MouseEventHandler } from "react";
import data from "./data";
import Meal from "../Interfaces/Meal";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import noodles from '../images/noodles.jpeg'
interface cardProps {
  fav: boolean;
  mealname: string;
  id: string;
  category: string;
  area: string;
  tags: string | null;
  price: number;
  toggle: boolean;
  favFoodList: Array<any>;
  setFavFoodList: (
    value: Array<any> | ((prevVar: Array<any>) => Array<any>)
  ) => void;
}


const FoodCard:React.FC<cardProps> = ({
  fav,
  mealname,
  id,
  category,
  area,
  tags,
  setFavFoodList,
  favFoodList,
  price,
  toggle,
}: cardProps) => {
//   const handleFavourite = (e:MouseEventHandler<HTMLSpanElement>) => {
//     if (e.target.parentElement.parentElement.classList.contains("heart")!) {
//       let foundmeal: Meal;
      
//         toggle
//           ? (foundmeal = data.find((item) => item.idMeal === id))
//           : (foundmeal = favFoodList.find((item) => item.idMeal === id));
      

//       if (foundmeal.fav === false) {
//         foundmeal.fav = true;
//         setFavFoodList([...favFoodList, foundmeal]);
//         e.target.parentElement.parentElement.classList.add("red")!;
//       } else {
//         foundmeal.fav = false;
//         favFoodList.forEach((item, idx) => {
//           if (item.idMeal === foundmeal.idMeal)
//             setFavFoodList(favFoodList.splice(idx, 1));
//         });
//         e.target.parentElement.parentElement.classList.remove("red");
//         setFavFoodList([...favFoodList]);
//       }
//     }
//   };
  // console.log(favFoodList)

  return (
    <div className="card">
      <div className="top">
        <p className="mealname">{mealname}</p>
        {/* {fav ? (
          <span className="heart red" onClick={handleFavourite}>
            <AiFillHeart />
          </span>
        ) : (
          <span className="heart" onClick={handleFavourite}>
            <AiFillHeart />
          </span>
        )} */}
      </div>
      <div className="middle">
        <img src={noodles} />
        <div className="foodinfo">
          <div className="category-area">
            <span className="category">{category}</span>
            <span className="area">{area}</span>
          </div>
          <div className="foodtag">
            <span>{tags}</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <button>
          <p>Add To Cart</p>
          <AiOutlineShoppingCart />
        </button>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default FoodCard;
