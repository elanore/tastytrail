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

const RestaurantCard = () =>{
    return (
        <div className="res-card" style={{backgroundColor:"f0f0f0"}}>
            <img 
            className="res-logo"
            alt="megha biriyani"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" 
            
            />
            <h3>Meghna Foods</h3>
            <h4>Biriyani, North Indian, Chinese</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );

};

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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
