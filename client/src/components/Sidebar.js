import React from 'react';
// import '../App.css';


const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="logo">
                <h2>veggie</h2>
            </div>
            <a href="#home">home</a>
            <a href="#veggies">veggies</a>
            <a href="#register">register</a>
            <a href="#login">login</a>
            <a href="#contact">contact</a>
        </div>
    );
}

export default Sidebar;
