import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <img className="navbar-logo" src={logo} alt="logo" />
                <Link to="/users">
                    <li>Users</li>
                </Link>
                <Link to="/films">
                    <li>Films</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
