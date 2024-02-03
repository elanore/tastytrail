import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
    //console.log(props);

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
        </div>
    );

};

export default RestaurantCard;