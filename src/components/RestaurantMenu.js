import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = ()=>{
    const [resInfo,setresInfo] =useState(null);

    const {resId} = useParams();
    console.log(resId,"params");

    
    useEffect(() =>{
        fetchMenu();

    },[]);


    

const fetchMenu = async () =>{
    const data = await fetch(MENU_API +resId);
    const json = await data.json();
    //console.log(json);
    //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards,"id item")
    //console.log(json.data.cards[0].card.card.info);
    setresInfo(json.data);
};
if(resInfo ===null) return <Shimmer/>;


//destructuring data for menu items
const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
//console.log(itemCards,"itemCards");
    

//destructure data for name ,cuisines avgRating
const {name, cuisines, costForTwoMessage, avgRating}  = resInfo?.cards[0]?.card?.card?.info;
    
    return (  
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")}- {costForTwoMessage}</p>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
             
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} </li>
                ))}
            </ul>
        </div>
    );

};

export default RestaurantMenu;