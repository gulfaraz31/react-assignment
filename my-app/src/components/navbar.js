import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar(){
    return(
        <div className="navbar">
            <span className="Logo">SAVERZ</span>
            <NavLink to="contacts">Contacts</NavLink>
            <NavLink to="home">Home</NavLink>
            <NavLink to="Login">Login</NavLink>
        </div>
        

    )
}

export default Navbar;