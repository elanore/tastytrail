import React  , {lazy, Suspense,useState,useEffect} from "react";
import ReactDOM  from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
const Grocery = lazy(()=>import("./components/Grocery"));

import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () =>{

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() =>{
        const data = {
            name:"Shiny Joseph",
        };
        setUserName(data.name);
        
    },[])

    return (
        <Provider store = {appStore}>
            <UserContext.Provider value = {{loggedInUser :userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
     );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
        {
            path:"/",
            element:<Body/>
        },
        {    
        path: "/about",
        element:<About/>,
        },
        {
        path:"/contact",
        element:<Contact/>
        },
        {
        path:"/cart",
        element:<Cart/>
        },
        {
        path:"/restuarants/:resId",
        element:<RestaurantMenu/>
        },
        {
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
        },

        ],
        errorElement:<Error/>,

    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
