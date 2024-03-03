import React, { useContext } from "react";
import UserContext from "./usercontext";

function UserDetail() {

    const data = useContext(UserContext);
    console.log(data);

    return(
        <>
        <h1>UserDetails</h1>
        <h2>Name{data.name}</h2>
        <h2>Address{data.address}</h2>
        <h2>Country{data.country}</h2>
        
        
        </>
    );
}

export default UserDetail;