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
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )


}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
