 import Navbar from "./Navbar"
 import React from "react";
 import Trip from "./Trip";
 import Tripdata from "./Tripdata";
 import Destination from "./Destination"
 import "./Home.css"
import Footer from "./Footer"

 
 function home(){
    return (
        <>
          <div>
         <Navbar/>  
         <div className="hero">
        <img src="https://images.unsplash.com/photo-1521120314651-9536f2ab5f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
          </div>
        <div className="hero-text">
            <h1>Your Journey your Story</h1>
            <p>Choose Your Favourite Destination</p>
            <button className="hero-button"
             href="/">Travel plan</button>
            </div>
           <Destination/>
           <Trip/>
           <Tripdata/>
           <Footer/>
        
        </div>
        
           
          
        </>
    );

 }
 export default home;