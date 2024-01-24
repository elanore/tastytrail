import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 1,
        };

       
    }
    //react.component is a class given by react 
    render(){


        //render method returns a jsx which is displayed in ui
        return (<div className="user-card">
        <h1>About user-class</h1>
        <h2>count = {this.state.count}</h2>
        <p>Name : {this.props.name}</p>
        <p>Location: {this.props.location}</p>
        <p>Contact : www.linkedIn/shiny-joseph</p>

    </div>
    );
    }
}

export default UserClass;