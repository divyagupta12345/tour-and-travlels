import React from 'react'; // Import React from the 'react' library.
import './TripStyle.css'; // Import your CSS file.
import { data } from './Data';

function Tripdata(props) {
    return (
        <>
            {data.map((item, index) => ( 
                <div className="t-card" key={index}> 
                    <div className="t-image">
                        <img src={item.image} alt="image" /> 
                    </div>
                    <h4>{item.heading}</h4>
                    <p>{item.text}</p>
                </div>
            ))}
        </>
    );
}

export default Tripdata;
