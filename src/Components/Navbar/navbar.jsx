import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Hassan</h1>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar