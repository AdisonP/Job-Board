import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerCp } from "../../actions/auth";
import axios from 'axios';
import "./Form_sign.css"
import { Redirect } from "react-router";


  
const Form_register_cp = (props) => {

    const [mail, setmail] = useState("");
    const [psw, setpsw] = useState("");
    const [activities, setActivities] = useState("");
    const [city, setCity] = useState("");
    const [siret, setSiret] = useState(0);
    const [website, setWebsite] = useState("");
    const [employeCount, setEmployeCount] = useState(0);
    const [phone, setPhone] = useState(0);
    const [name, setName] = useState("");
    const [cname, setCname] = useState("");
    const [postal_code, setpostal_code] = useState(0);

    const message = useSelector(state => state.message);

    const onChangeCName = (e) =>{
        const cn = e.target.value; 
        setCname(cn);
    };
    const onChangeName = (e) =>{
        const nm = e.target.value; 
        setName(nm);
    };
    const onChangeMail = (e) =>{
        const ml = e.target.value; 
        setmail(ml);
    };
    const onChangePsw = (e) =>{
        const ps = e.target.value; 
        setpsw(ps);
    };
    const onChangeActivities = (e) =>{
        const ac = e.target.value; 
        setActivities(ac);
    };
    const onChangeCity = (e) =>{
        const c = e.target.value; 
        setCity(c);
    };
    const onChangeSiret = (e) =>{
        const s = e.target.value; 
        setSiret(s);
    };
    const onChangeWs = (e) =>{
        const ws = e.target.value; 
        setWebsite(ws);
    };
    const onChangeEmployeCount = (e) =>{
        const ec = e.target.value; 
        setEmployeCount(ec);
    };
    const onChangePhone = (e) =>{
        const pn = e.target.value; 
        setPhone(pn);
    };
    const onChangePs = (e) =>{
        const p = e.target.value; 
        setpostal_code(p);
    };

    const dispatch = useDispatch();

    const sendRegister = (e) => {
        e.preventDefault();

        const cp = {
            activities: activities ? activities : null,
            postal_code: postal_code ? postal_code : null,
            city: city ? city : null,
            siret: siret ? siret : null, 
            password: psw ? psw : null,
            name: name ? name : null,
            contact_name: cname ? cname : null,
            number_employes: employeCount ? employeCount : null, 
            phone: phone ? phone : null,
            website: website ? website : null, 
            email: mail ? mail : null
        }

        dispatch(registerCp(cp))
        .then(()=> {
            return <Redirect to="/login" />
        });
    }
        return (
            <form onSubmit={sendRegister}>
                <div class='bold-line'></div>
                    <div class='container'>
                        <div class='window'>
                            <div class='overlay'></div>
                                <div class='content'>
                                    <div class='welcome'>Hello There!</div>
                                            <div class='input-fields'>
                                                <input type='text' id="Name" placeholder='Name' value={name} onChange={onChangeName} class='input-line full-width' required></input>
                                                <input type='text' id="ContacttName" placeholder='Contact Name' value={cname} onChange={onChangeCName} class='input-line full-width' required></input>
                                                <input type='email' id="Email" placeholder='Email' value={mail} onChange={onChangeMail} class='input-line full-width' required></input>
                                                <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangePsw} class='input-line full-width' required></input>
                                                <input type='number' id='siret' placeholder='siret' value={siret} onChange={onChangeSiret} class='input-line full-width'></input>
                                                <input type='text' id='activities'placeholder='activities' value={activities} onChange={onChangeActivities} class='input-line full-width'></input>
                                                <input type='text' id='city' placeholder='city' value={city} onChange={onChangeCity} class='input-line full-width' required></input>
                                                <input type='text' id='website' placeholder='website' value={website} onChange={onChangeWs} class='input-line full-width'></input>
                                                <input type='number' id='employecount' placeholder='employe count' value={employeCount} onChange={onChangeEmployeCount} class='input-line full-width'></input>
                                                <input type='number' id='phone' placeholder='phone' value={phone} onChange={onChangePhone} class='input-line full-width' required></input> 
                                                <label for="postalcode" required>  Code postal</label>          
                                                <input type='number' id='postalcode' placeholder='postal code' value={postal_code} onChange={onChangePs} class='input-line full-width'></input>
                                            </div>
                                            <div><button class='ghost-round full-width'>Create Company Account</button></div>
                                            <a href='/register'>User Register</a>
                                        </div>
                                    </div>
                            </div>
            </form>
        )  
}
export default Form_register_cp;
