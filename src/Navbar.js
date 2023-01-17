import React, { useState } from "react";
import {Link} from "react-scroll";

const Navbar = () => {
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
            <h1>Mayte Velueta</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link to="project-list" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;