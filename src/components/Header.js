import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () =>{
//let btnName ="Login";
const [btnlogin, setBtnlogin] =useState("Login");



    return (
        <div className ="header">
            <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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
