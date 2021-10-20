import React, {useState, useEffect} from 'react'
import "./navbar.css";
import logo from './jobboard_logo.png';

export default function Navbar() {
    
    const [toogleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const toogleNavSmallScreen = () => {
        setToggleMenu(!toogleMenu);
    }
    
    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 500) {
                setToggleMenu(false); 
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])
    return (
        <nav>
            {(toogleMenu || largeur > 500) && (
                <ul className="list">
                    <li className="items"><img id="logo_project" src={logo}></img></li>
                    <li className="items"><a href="/login">Sign-in</a></li>
                    <li className="items"><a href="/register">Sign-up</a></li>
                </ul>
            )}
        </nav>
    )
}