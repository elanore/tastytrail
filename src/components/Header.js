import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
//let btnName ="Login";
const [btnlogin, setBtnlogin] =useState("Login");

const onlineStatus = useOnlineStatus();



    return (
        <div className ="header">
            <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status :{onlineStatus ? "✅": "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>


                    <button className="login"
                    onClick={()=> { 
                        btnlogin === "Login" ?setBtnlogin("Logout") :setBtnlogin("Login");
                        //console.log("btnName");
                    }}
                    >
                        {btnlogin}
                    </button>
                </ul>
            </div>
        </div>
    );


};

export default Header;
