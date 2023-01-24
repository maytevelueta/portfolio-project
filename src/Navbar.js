import React, { useState } from "react";
import {Link} from "react-scroll";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "./assets/logo.png";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 5) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

    return ( 
        <div className={color ? "navbar-container navbar-container-bg" : "navbar-container"}>
        <nav className="navbar">
            <a href="/" className="logo">
              <img src={logo} alt="logo"/>
            </a>
            <div className="hamburger" onClick={handleClick}>
                { click ? (<FaTimes size={30} style={{color: '#ffffff'}} />) :
                (<FaBars size={30} style={{color: '#85586F'}} />)}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-link">
                <a href="/">Home</a>
                </li>
                <li className="nav-link">
                <Link to="project-list" spy={true} smooth={true} offset={-100} duration={500} style={{cursor:"pointer"}}>Projects</Link>
                </li>
                <li className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} style={{cursor:"pointer"}}>Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
     );
}
 
export default Navbar;