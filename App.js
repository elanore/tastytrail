import React from "react";
import ReactDOM  from "react-dom/client"; 

//jsx - can be nested ,wrap it inside a single div

//react element😎
const heading = (
<h1 id="heading" className="head" tabIndex="1">
    Hello React 🙂  
</h1>
);
console.log(heading,"heading");

//React component -everything is a component in react 
//React functional component is just a normal js function- transpile to js function 
//both syntax below are same
const Headingcomp1 = () => <h1>Hello functions</h1>;


//React functional component😎
const Headingcomp = () => {
 return <h1>Hello functional components 😘</h1>;
};

//component composition -composing component inside 
const Title =() =>(
    
    <div>
        <Headingcomp/>
        <Headingcomp1/>
        <h2>hello nesting</h2>
    </div>
    
);


const root = ReactDOM.createRoot(document.getElementById("root"));
//renders react element 

//how to render components
root.render(<Title/>);
