import RestaurantCard , { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import {useState, useEffect, useContext} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () =>{

    //local state variable
    const [listofRestaurant,setlistofRestaurant] = useState([]);
    const[filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setSearchText] =useState("");

    //console.log(filteredRestaurant,"list of filtered restaurant");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //optional chaining 
        setlistofRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        setfilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        console.log (json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,"new data")
        //console.log (json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.aggregatedDiscountInfoV3.discountTag,"new data discount")
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
    <h1>Looks like you are offline !!!</h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);
     
    return listofRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e)=> {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className= "px-4  py-2 bg-blue-100 m-4 rounded-lg" 
                        onClick={()=>{
                            const filteredRestaurant= listofRestaurant.filter(
                                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                                setfilteredRestaurant (filteredRestaurant);
                            }}>
                            Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button 
                        className="px-4 py-2 bg-gray-100 rounded-lg" 
                        onClick={()=>{
                            const filteredList = listofRestaurant.filter(
                                (res)=>res.info.avgRating > 4.2
                                );
                                setfilteredRestaurant(filteredList);
                            }}>
                         Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>UserName </label>
                    <input className="border border-black p-2"
                    value = {loggedInUser}
                    onChange ={(e)=> setUserName(e.target.value)}
                    />
                </div>
             </div>
            <div className="flex flex-wrap">
                
                {
                    filteredRestaurant.map((restaurant)=>
                    (
                    <Link key={restaurant.info.id} 
                    to={"/restuarants/"+restaurant.info.id}>
                        {/**  Promoted Restaurant */
                            restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ? <RestaurantCardPromoted resData={restaurant}/> :
                            <RestaurantCard resData={restaurant}/>

                        }
                    
                    </Link>
                    ))}
            </div>
        </div>
    );
};

export default Body;