import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
//let btnName ="Login";
const [btnlogin, setBtnlogin] =useState("Login");

const onlineStatus = useOnlineStatus();



    return (
        <div className ="flex justify-between bg-pink-300 shadow-sm">
            <div className="logo-container">
                <img 
                className="w-56"
                src={LOGO_URL} alt="logo"/>
            </div>
            <div className="flex items-center">
                <ul className= "flex p-4 m-4">
                    <li className="px-4"> 
                        Online Status :{onlineStatus ? "✅": "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-4">
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
