import React, {Component, useEffect, useState} from 'react';
import NavAdmin from './NavAdmin/NavAdmin';
import UserList from './User/UserList/UserList_admin';
import CmpList from './Cmp/CmpList/CmpList_admin';
import AdvList from './Adv/AdvList/AdvList_admin';
import "./admin.css";


const Admin =(props) => {
    const [section, setSection] = useState("USER");

    const setCp = ()=>{
        setSection("CP");

    }

    const setUser = () => {
        setSection("USER")

    }

    const setOffers = () => {
        setSection("OFFER")
    } 

    useEffect(() => {
        let mountain = true;
        if(mountain){
            setSection("USER");
        }
    }, [])

        return <div id="admin">
            <nav className="NavAdmin">
                <ul>
                    <li onClick={setUser}>User</li>
                    <li onClick={setCp}>Company</li>
                    <li onClick={setOffers}>Offer</li>
                </ul>
            </nav>
        
        {section == "USER" ? <UserList /> : ""}
        {section == "OFFER" ? <AdvList /> : ""}
        {section == "CP" ? <CmpList /> : ""}
        </div>
}

export default Admin;