   /*

   nesting in react 
   div>div>h1

   const parent = React.createElement("div",{id:"parent},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"i am h1 tag")
    )
   )

   */
   
  
   const heading  = React.createElement("h1",{id:"heading"},"hello world React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
