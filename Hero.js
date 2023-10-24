import "./Hero.css"
function Hero(){
    return(
        <>
        <section className="hero-wrapper">
        <div className="hero">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg"/>
          </div>
        <div className="hero-text">
            <h1>Your Journey your Story</h1>
            <p>Choose Your Favourite Destination</p>
            <button className="hero-button"
             href="/">Travel plan</button>
        </div>
        </section>
        
        </>
    )
}
export default Hero;