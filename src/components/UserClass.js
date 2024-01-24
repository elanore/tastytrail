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

        const {name,location} = this.props;
        const {count,count2} = this.state;


        //render method returns a jsx which is displayed in ui
        return (<div className="user-card">
        <h1>About user-class</h1>
        <h2>count = {count}</h2>
        <button onClick={()=>{
            this.setState({
                count : this.state.count +1
            });
        }}>Count + </button>
        <button onClick= {()=>{
            this.setState(
                {
                    count :this.state.count -1
                }
            );
        }}>Count -</button>
        <p>Name : {name}</p>
        <p>Location: {location}</p>
        <p>Contact : www.linkedIn/shiny-joseph</p>

    </div>
    );
    }
}

export default UserClass;