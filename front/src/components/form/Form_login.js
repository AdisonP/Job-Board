import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./Form_sign.css";
import "./id_form.css";

const Form_login = (props) => {
    const bundle = useSelector(state => state.auth);

    const [mail, setmail] = useState("");
    const [psw, setpsw] = useState("");
    const [loading, setloading] = useState(false);

    const onChangeMail = (e) =>{
        const mail = e.target.value; 
        setmail(mail);
    };
    const onChangePsw = (e) =>{
        const psw = e.target.value; 
        setpsw(psw);
    };

    const isLog = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const sendLogin = (e) => {
        e.preventDefault();

        setloading(true);

        dispatch(login(mail, psw, "USER"))
        .then(()=>{
            console.log(message);
        });
    }

    if (isLog.isLoggedIn) {
        return <Redirect to="/" />;
      }

        return (
            <div >
            <form className="form" onSubmit={sendLogin}>
                <div class='bold-line'></div>
                    <div class='container'>
                        <div class='window'>
                            <div class='overlay'></div>
                                <div class='content'>
                                    <div class='welcome'>Hello There!</div>
                                        <div class='subtitle'>We're happy to see you again ! Please, enter your login details to access your space.</div>
                                            <div class='input-fields'>
                                                <input type='email' id="Email" placeholder='Email' value={mail} onChange={onChangeMail} class='input-line full-width' required></input>
                                                <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangePsw} class='input-line full-width' required></input>
    
                                            </div>
                                            <br></br>
                                            <a href="/login/admin"> Admin </a>
                                            <a href="/login/cp"> Company </a>
                                            <p> New Member ? <a href="/register"> Register </a> </p>
                                            <div><button class='ghost-round full-width'>Login</button></div>
                                        </div>
                                    </div>
                            </div>
            </form>
            </div>
        )
}

export default Form_login;