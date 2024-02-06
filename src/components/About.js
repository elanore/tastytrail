import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


class About extends Component {

    constructor(props){
        super(props);
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent mount");
    }
    render(){
        console.log("parent render");

        return (
            <div>
                <h1>About us</h1>
                <div>
                    LoggedIn user : 
                    <UserContext.Consumer>
                        {({loggedInUser})=> (
                        <h1 className="text-xl font-bold bg-red-300">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <p>Find more about us here !!</p>

                <User name={"Shiny Joseph(function)"}/>
                <UserClass name = {"Shiny Joseph(class)"} location={"Kerala"}/>
            </div>


        );
    }
}



export default About;

