import React from 'react';
import '../App2.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="side-bar">
            <div className="logo">
                <h2>veggie</h2>
            </div>
            <ul className="list-links">
                <Link to="/home"><li>home</li></Link>
                <Link to="/sign-up"><li>sign up</li></Link>
                <Link to="/login"><li>login</li></Link>
                <Link to="/veggies"><li>veggies</li></Link>
                <Link to="/contact"><li>contact</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;
