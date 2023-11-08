import React from "react";
import ReactDOM  from "react-dom/client"; 

//jsx - can be nested ,wrap it inside a single div

const elem = <span>new variable</span>
//react element😎
const heading = (
<h1 id="heading" className="head" tabIndex="1">
    {elem}
    Hello React 🙂 😇 
</h1>
);
console.log(heading,"heading");

//const data = api data   we can run any js inside jsx ,if data coming is malicious it can do harm, 
//injection attack - jsx the {} brackets sanitises the data- prevents cross site scripting attacks

//React component -everything is a component in react 
//React functional component is just a normal js function- transpile to js function 
//both syntax below are same
const Headingcomp1 = () => <h1>Hello functions</h1>;


//React functional component😎
const Headingcomp = () => {
 return <h1>Hello functional components 😘</h1>;
};

const number = 100;
//component composition -composing component inside 
//in jsx anywhere inside {} you can run any js expression/code , can do mathematical calculation, inject any js inside jsx
//since heading is a react element - its basically is a normal js variable
const Title =() =>(
    
    <div>
        {heading}
        {number}
        <h2>{1+100}</h2>
        {Headingcomp1()}
        <Headingcomp></Headingcomp>
        <Headingcomp/>
        <Headingcomp1/>
        <h2>hello nesting</h2>
    </div>
    
);

//instead of arrow function we can write normal function but we have to use return 

const root = ReactDOM.createRoot(document.getElementById("root"));
//renders react element 

//how to render components
root.render(<Title/>);

//notes
// you cant call a const variable before initialisation
// you can call a component inside element also
//functional components are js functions so we can call it inside {} as a normal js function {Headingcomp1()}
