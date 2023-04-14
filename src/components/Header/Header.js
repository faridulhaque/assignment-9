import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <Link to='/'>Home</Link>
                
                <Link to='/review'>Review</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>

            </nav>
        </div>
    );
};

export default Header;