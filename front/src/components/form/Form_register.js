import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";
import axios from 'axios';
import "./Form_sign.css"
import { Redirect } from "react-router";


  
const Form_register = (props) => {

    const [mail, setmail] = useState("");
    const [psw, setpsw] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [loading, setloading] = useState(false);

    const message = useSelector(state => state.message);

    const onChangeFName = (e) =>{
        const fname = e.target.value; 
        setfname(fname);
    };
    const onChangeLName = (e) =>{
        const lname = e.target.value; 
        setlname(lname);
    };
    const onChangeMail = (e) =>{
        const mail = e.target.value; 
        setmail(mail);
    };
    const onChangePsw = (e) =>{
        const psw = e.target.value; 
        setpsw(psw);
    };

    const dispatch = useDispatch();

    const sendRegister = (e) => {
        e.preventDefault();

        setloading(true);

        dispatch(register(lname, fname, mail, psw))
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
                                        <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                                            <div class='input-fields'>
                                                <input type='text' id="Name" placeholder='Name' value={lname} onChange={onChangeLName} class='input-line full-width' required></input>
                                                <input type='text' id="FirstName" placeholder='First Name' value={fname} onChange={onChangeFName} class='input-line full-width' required></input>
                                                <input type='email' id="Email" placeholder='Email' value={mail} onChange={onChangeMail} class='input-line full-width' required></input>
                                                <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangePsw} class='input-line full-width' required></input>
    
                                            </div>
                                            <div><button class='ghost-round full-width'>Create Account</button></div>
                                            <a href='/register/company'>Company Register</a>

                                        </div>
                                    </div>
                            </div>
            </form>
        )  
}
export default Form_register;
