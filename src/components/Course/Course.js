import React, { useState } from 'react';
import FakeData from '../../Fake-data.json';
import Cart from '../Cart/Cart';
import Pay from '../Pay/Pay';
import './Course.css';

const Course = () => {
    const first12=FakeData.slice(0,12);
   const[courses,setCourses]= useState(first12);
   const[cart,setCart]=useState([]);
   const handleAddPay=(cs)=>{
       console.log("Pay added",cs);
       const newCart=[...cart,cs];
       setCart(newCart);

   }
  

   
    return (
        <div className="course-container">
            <div className="pay-container">
                {
                    courses.map(cs=><Pay handleAddPay={handleAddPay}cs={cs}></Pay>)
                }
               
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Course;