import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from 'react';



const Body = () =>{

    //local state variable
    const [listofRestaurant,setlistofRestaurant] = useState([]);

    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        //optional chaining 
        setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //console.log("mydata",json);
        //console.log(json, "json data api");
        //console.log (json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,"new data")
    };
    if (listofRestaurant.length === 0) {
        return <h1>Loading ...</h1>
    }

    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    
                  
                    const filteredList = listofRestaurant.filter(
                        (res)=>res.info.avgRating > 4.4
                        );
                        console.log(listofRestaurant);
                        setlistofRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
             </div>
            <div className="res-container">
                {
                    listofRestaurant.map((restaurant)=>
                    (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
                
               
            </div>
        </div>
    );
};

export default Body;