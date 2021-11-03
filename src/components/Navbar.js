import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'


function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand ml-5"><h2>Galaxy Todo App</h2></Link>
        </nav>
    )
}

export default Navbar
