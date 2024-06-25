import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
//let btnName ="Login";
const [btnlogin, setBtnlogin] =useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

//subscribe to stroe using selector
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);


    return (
        <div className ="flex justify-between bg-blue-200 shadow-sm mb-2 sm:bg-yello-200 lg:bg-red-200">
            <div className="border border-solid border-red-200">
                <img 
                className="w-24"
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
                        <Link to="/cart">
                            cart 🛒 - ({cartItems.length} items)
                        </Link>
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
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );


};

export default Header;
