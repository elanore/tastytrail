import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    //console.log(data,"data");
    return (
        <div>
            {/**accordion header */}
            <div className="bg-gray-50 w-6/12 mx-auto  my-6 shadow-lg p-4 ">
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{"⌄"}</span>
                </div>
                <ItemList items={data.itemCards}/>

            </div>
            
        </div>
    );
};

export default RestaurantCategory;