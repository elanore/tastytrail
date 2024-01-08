import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () =>{
    
    let listofRestaurant = [
        {
                    "info": {
                      "id": "65797",
                      "name": "Leon's - Burgers & Wings (Leon Grill)",
                      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
                      "costForTwo": "₹300 for two",
                      "cuisines": ["American","Snacks","Turkish","Portuguese","Continental"],
                      "avgRating": 4.4,
                    },
        },
        {
                    "info": {
                      "id": "65798",
                      "name": "Hello Burger",
                      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
                      "costForTwo": "₹350 for two",
                      "cuisines": ["American","Snacks","Turkish","Portuguese","Continental"],
                      "avgRating": 3.2,
                    }, 
        },
];

    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    //filter logic
                    //console.log("clicked");
                    listofRestaurant = listofRestaurant.filter(
                        (res)=>res.info.avgRating > 4
                        );
                        console.log(listofRestaurant);
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