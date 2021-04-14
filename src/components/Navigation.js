import { useState } from 'react'
import '../CSS/Navigation.css'
const Navigation = () => {

    const [menuOpen,setMenuOpen]=useState(false)

    const toggleMenu=()=>{
         //open menu on burger click
        setMenuOpen(!menuOpen)
    }

    const navItenClick=()=>{
       //close menu on nav item click
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="MenuWrap">
            <div className="mobile-nav-button" onClick={toggleMenu}>
                <div className={menuOpen ? "mobile-nav-button__line mobile-nav-button__line--1" : "mobile-nav-button__line"} ></div>
                <div className={menuOpen ? "mobile-nav-button__line mobile-nav-button__line--2" : "mobile-nav-button__line"}></div>
                <div className={menuOpen ? "mobile-nav-button__line mobile-nav-button__line--3" : "mobile-nav-button__line"}></div>
            </div>

            <nav className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
                <ul>
                    <li onClick={navItenClick}>About</li>
                    <li>Work</li>
                    <li>EDU</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        </div>
    )
}
export default Navigation