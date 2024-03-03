import React, { useContext } from "react";
import UserContext from "./usercontext";

function UserDetail() {

    const data = useContext(UserContext);
    console.log(data);

    return(
        <>
        <div>UserDetails</div>
        <p>Name{data.name}</p>
        <p>Address{data.address}</p>
        <p>Country{data.country}</p>
        
        
        </>
    );
}

export default UserDetail;