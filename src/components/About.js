import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


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
                <p>Find more about us here !!</p>

                <User name={"Shiny Joseph(function)"}/>
                <UserClass name = {"Shiny Joseph(class)"} location={"Kerala"}/>
            </div>


        );
    }
}



export default About;

