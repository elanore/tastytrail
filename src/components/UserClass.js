import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "defaultname",
                location: "default",
                avatar_url: "http://dummyphoto.com"
            },
            
        };
console.log("child constructor");
       
    }

    async componentDidMount(){
        console.log("child mount");
        const data = await fetch("https://api.github.com/users/elanore");
        const json = await data.json();

       

        this.setState ({
            userInfo: json,
        });

         console.log(json, "about us data");

    }
    //react.component is a class given by react 
    render(){

       console.log("child render");
       const {name,location,avatar_url} = this.state.userInfo;


        //render method returns a jsx which is displayed in ui
        return (
        <div className="user-card">
            <h1>About user-class</h1>
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact : www.linkedIn/shiny-joseph</h4>

            <img src= {avatar_url}/>
        </div>
    );
    }
}

export default UserClass;