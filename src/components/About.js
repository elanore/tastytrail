import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return (
        <div>
            <h1>About us</h1>
            <p>Find more about us here !!</p>

            <User name={"Shiny Joseph(function)"}/>
            <UserClass name = {"Shiny Joseph(class)"} location={"Kerala"}/>


        </div>
    );
};

export default About;

