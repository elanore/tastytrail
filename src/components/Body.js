import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';



const Body = () =>{

    //local state variable
    const [listofRestaurant,setlistofRestaurant] = useState(resList);

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