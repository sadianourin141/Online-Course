import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,crs)=>total+crs.price,0)
    return (
       <div className="cart">
        
           
           <h2>Courses added:{cart.length}</h2>
           <h3> Total Payment:${total}</h3>
        </div>
        
    );
};

export default Cart;