import React from "react";
import ReactDOM  from "react-dom/client"; 

/*
* header 
    -logo
    -nav item component
* body
    -search
    -restaurant container
      -restaurant cards

* footer
    -copyright
    -address
    -contact
    -links

*/

/
const root = ReactDOM.createRoot(document.getElementById("root"));
//renders react element 
//root.render(heading);

//how to render components
root.render(<Title/>);

//notes
// you cant call a const variable before initialisation
// you can call a component inside element also
//functional components are js functions so we can call it inside {} as a normal js function {Headingcomp1()}
