import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    //check if online
    useEffect(()=>{

        window.addEventListener("offline", () =>{
            setOnlineStatus(false)

        });
        window.addEventListener("online", () =>{
            setOnlineStatus(true)

        });


    },[]);



   
    return onlineStatus;

};
export default useOnlineStatus;

 //finalise the contract
 //define input and output
 //check if online and return online status here boolean value