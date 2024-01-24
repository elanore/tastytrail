import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{

    const [resInfo,setresInfo] =useState(null);

    useEffect(() =>{
        fetchMenu();

    },[]);

const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json);
    //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards,"id item")
    //console.log(json.data.cards[0].card.card.info);
    setresInfo(json.data);

    const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards[0].card.info)
   console.log(itemCards,"item");
   
};
if(resInfo ===null) return <Shimmer/>;

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
                    <li key={item.card.info.id}>{item.card.info.name} - {}</li>
                ))}
            </ul>
        </div>
    );

};

export default RestaurantMenu;