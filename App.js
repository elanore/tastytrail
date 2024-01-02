import React from "react";
import ReactDOM  from "react-dom/client"; 

/*
* header 
    -logo
    -nav item component
* body
    -search
    -restaurant container
      -restaurant cards
            - img 
            - name
            - star rating
            - cuisine
            - ETA

* footer
    -copyright
    -address
    -contact
    -links

*/

const Header = () =>{
    return (
        <div className ="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://cdn-icons-png.flaticon.com/512/187/187879.png" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );


};

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log(props);
    return (
        <div className="res-card" /*style={{backgroundColor: "#f0f0f0"}}*/>
            <img 
            className="res-logo"
            alt="alternate image"
            src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId 
            
            }/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    );

};

const resObj= {
    "info": {
                      "id": "65797",
                      "name": "Leon's - Burgers & Wings (Leon Grill)",
                      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental"
                      ],
                      "avgRating": 4.4,
                      "parentId": "371281",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-02 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      "context": "seo-data-1cfc1088-eb9f-4aa8-b8af-6a44b28d64cf"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData ={resObj}/>
                
               
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
