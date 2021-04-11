import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav><a href="/categories">Categories</a><a href="/Review"> Courses Review</a><a href="/Sources"></a>
            <input placeholder="search for anything" type="text"/>
            <button className=" login-btn">Log in</button>
            <button className="signin-btn">Sign up</button></nav>
        </div>
    );
};

export default header;