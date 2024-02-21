import React from "react";
import Navbar from "./navbar";
import "./home.css";
import shopping from "./images/Shopping.png"

function Home () {
    return(
        <>
        <Navbar/>
        <div className="imgbox"> 
            <img className="imgg" src={shopping} alt="shopping image" />
        </div>
        
        </>
    )
}

export default Home;