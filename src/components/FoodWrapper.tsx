import React, { useState } from "react";
import Meal from "../Interfaces/Meal";
import data from "./data";
import FoodCard from "./FoodCard";
import NavBar from "./NavBar";
import ShowMore from "./ShowMore";

const FoodWrapper:React.FC = () => {
  let [num, setNum] = useState<number>(2);
  let [favFoodList, setFavFoodList] = useState<Array<any>>([]);
  let [toggle, setToggle] = useState<boolean>(true);
  let [items, setItems] = useState<Array<Meal>>(data);

  return (
    <div>
      <NavBar
        setItems={setItems}
        toggle={toggle}
        setToggle={setToggle}
        favFoodList={favFoodList}
      />
      {items.map((item, idx) => {
        if (idx < num) {
          return (
            <FoodCard
              toggle={toggle}
              key={idx}
              mealname={item.strMeal}
              id={item.idMeal}
              category={item.strCategory}
              area={item.strArea}
              tags={item.strTags}
              setFavFoodList={setFavFoodList}
              favFoodList={favFoodList}
              price={item.price}
              fav={item.fav}
            />
          );
        }
      })}
       <ShowMore num={num} setNum={setNum}/>
    </div>
  );
};

export default FoodWrapper;
