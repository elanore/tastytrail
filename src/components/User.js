import { useState } from "react";



const User = (props) =>{

    const [count,setCount] = useState(0);
    const [count1] = useState(1);

    return (<div className="user-card">
        
        <h1>About user</h1>
        <p>Name: {props.name}</p>
        <p>Contact : www.linkedIn/shiny-joseph</p>
        <h2>Count = {count}</h2>
        <h2>Count1 = {count1}</h2>

    </div>
    );
};

export default User;