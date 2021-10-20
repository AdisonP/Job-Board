import React, {useState, useEffect} from 'react'
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import logo from './jobboard_logo.png';
import { logout } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const Navbar_in = (props) => {
    const [toogleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);
    const toogleNavSmallScreen = () => {
        setToggleMenu(!toogleMenu);
    }
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();
    
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

    const disconnect = () => {
        dispatch(logout());
        return <Redirect to="/" />;
    }
    const adminPanel = () =>{
        if(auth.user.roles = "ADMIN"){
            return <li className="items"> Admin Panel </li>;
        }
    }

    return (
        <nav>
            {(toogleMenu || largeur > 500) && (
                <ul className="list">
                    <li className="items"><a href="/"><img id="logo_project" src={logo}></img></a></li>  
                    {auth.user.role.roles != "COMPANY" ? <a href="/account"><li className="items"> Account</li></a> : null}
                    {auth.user.role.roles == "ADMIN" ? <a href="/admin"> <li className="items"> Admin Panel </li> </a>: null}
                    {auth.user.role.roles == "COMPANY" ? <a href="/company"> <li className="items"> Company Panel </li> </a>: null}
                    {auth.user.role.roles == "USER" || auth.user.role.roles == "ADMIN" ? <a href="/applied"><li className="items"> Applied</li></a> : null}
                    <li className="items" onClick={disconnect}>Log out</li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar_in;