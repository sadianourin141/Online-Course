import React from 'react';
import './Pay.css';

const Pay = (props) => {
   // console.log(props);
   
    return (
        <div className="pay">
            <div className="img">
                <img src={props.cs.image}alt=""/>

            </div>
            <div>
            <h2>{props.cs.['Course-Title']}</h2>
            <h3>{props.cs.Name}</h3>
            <h3>{props.cs.University}</h3>
            <h4>{props.cs.Brief}</h4>
            <h3>${props.cs.price}</h3>
            <button className="enroll-btn" onClick={()=>props.handleAddPay(props.cs)}>Enroll Now</button>


            </div>
            
            
        </div>
    );
};

export default Pay;