import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    //console.log(resId,"params");
    const resInfo = useRestaurantMenu(resId);

    //shimmer
if(resInfo ===null) return <Shimmer/>;


  

//destructure data for name ,cuisines avgRating
const {name, cuisines, costForTwoMessage, avgRating}  = resInfo?.cards[0]?.card?.card?.info;
 
//destructuring data for menu items
const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
//console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards,"itemCards");
//console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards,"itemCards new");

const categories = 
resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
    c.card?.["card"]?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

//console.log(categories,"categories");
  
    return (  
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(" , ")}- {costForTwoMessage}</p>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
             {/**build accordion menu */}
             {categories.map((category)=>(
             <RestaurantCategory  key = { category.card.card.title} data = {category?.card?.card}/>
             ))}
        </div>
    );

};

export default RestaurantMenu;