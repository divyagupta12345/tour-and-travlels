 import Navbar from "./Navbar"
 import React from "react";
 import Hero from "./Hero";
 import "./Hero.css"
 import "./Home.css"
 import Destination from "./Destination";
 function home(){
    return (
        <>
          <div>
         <Navbar/>  
          <Hero/>
           <Destination/>
          </div>
        </>
    );

 }
 export default home;