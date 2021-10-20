import React, {useState, useEffect} from 'react'
import "./NavAdmin.css";
import '../User/UserList/UserList_admin.css'
import UserList_admin from '../User/UserList/UserList_admin';


export default function NavAdmin() {
    
    return (
        <nav className="NavAdmin">
            <ul>
                <li className="spoiler" onClick="ouvrirFermerSpoiler(this);">User</li>
                <li>Company</li>
                <li>Offer</li>
            </ul>
        </nav>
    );
}