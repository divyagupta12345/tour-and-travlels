import React from "react";
import "./Hero.css"

import "./Home.css"

function Hero(){
    return(
        <>
           <div className="hero">
        <img src="https://images.unsplash.com/photo-1521120314651-9536f2ab5f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
          </div>
        <div className="hero-text">
            <h1>Your Journey your Story</h1>
            <p>Choose Your Favourite Destination</p>
            <button className="hero-button"
             href="/">Travel plan</button>
            </div>
        
            
            
        
        </>
    )
}
export default Hero;