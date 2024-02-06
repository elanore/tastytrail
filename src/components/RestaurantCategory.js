import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems,setShowIndex, dummy}) => {
    //console.log(data,"data");

    //const [showItems,setShowItems] = useState(false);
    const handleClick = () =>{
        //console.log("clicked");
        //setShowItems(!showItems);
        setShowIndex();
    };
    return (
        <div>
            {/**accordion header */}
            <div className="bg-gray-50 w-6/12 mx-auto  my-6 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{"⌄"}</span>
                </div>
                { showItems && <ItemList items={data.itemCards} dummy ={dummy}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;