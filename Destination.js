import DestinationData from './DestinationData'
import React from 'react'
 import "./Destination.css"
const Destination = () => {
  return (
    <>
    <div className="destination">
      <h1>Popular Destination </h1>
      
      <p>“Travel makes one modest. You see what a tiny place you occupy in the world.”</p>
      
      <div className='first-des'>
        <div className='des-text'>
        <h2>Munnar holidays</h2>
        <p>Munnar Holidays are a family owned and managed Travel Company established in Munnar since 1998, initially to provide good, cost effective tours around the Munnar area and throughout Kerala. Through our total commitment to our clients, our specialist knowledge and through client recommendations we have grown year upon year to become one of Kerala’s leading Internet based travel companies. Now whilst still keeping our initial commitment to cost and client satisfaction we offer tours not only throughout South India but also to all major Indian tourist destinations. Along with our Indian clientele our client list is becoming increasingly international.Tours can be tailor-made to meet all travellers needs and budgets, from honeymoon packages to family occasions, special interest tours such as trekking trips and village tours, one day tours or multi-day tours, and from individual to corporate travel.

</p>
</div>
    <div className="image1">
      <img src="http://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg" />
      
    </div>

        </div>
      </div>
          <DestinationData/>
      </>
      
    
    
  )
}

export default Destination;