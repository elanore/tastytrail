//import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
//import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
    //console.log(props);
    //const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-red-200 hover:bg-red-300" /*style={{backgroundColor: "#f0f0f0"}}*/>
            <img 
            className=" rounded-lg"
            alt="alternate image"
            src={
                CDN_URL+ cloudinaryImageId 
            
            }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            {/**<h4>{loggedInUser}</h4>*/}
        </div>
    );

};


//higher order component - pure functions its only enhances the exisiting card it wont change the input component
//takes input as res card and output will be res card promoted

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-white text-red-400 m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>

                </div>
        );

    };
};

export default RestaurantCard;