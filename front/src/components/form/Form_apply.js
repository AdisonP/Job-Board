import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./Form_sign.css";
import "./Form_apply.css";
import {apply_secret} from '../../services/advertisement.services'
import axios from 'axios';

const Form_apply = (props) => {

    const [mail, setmail] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [phone, setphone] = useState("");
    
    const onChangeMail = (e) =>{
        const mail = e.target.value; 
        setmail(mail);
    };
    const onChangefname = (e) =>{
        const fname = e.target.value; 
        setfname(fname);
    };
    const onChangelname = (e) =>{
        const lname = e.target.value; 
        setlname(lname);
    };
    const onChangephone = (e) =>{
        const phone = e.target.value; 
        setphone(phone);
    };

    const apply = (e) => {
        e.preventDefault();
        const user = {name: lname, first_name: fname, email: mail, phone: phone, idAdv: props.idAdv };

        axios.post('http://localhost:3001/advertisement/apply', user)
        .then((resp) => {
        })
    }

    

    return (
        <form onSubmit={apply}>
            <div class='bold-line'></div>
                <div class='container'>
                    <div class='window'>
                        <div class='overlay'></div>
                            <div class='content'>
                                <div class='welcome'>Apply</div>
                                    <div class='subtitle'>for a job</div>
                                        <div class='input-fields'>
                                            <div className="row">
                                                <input type='text' id="Name" placeholder='Name' value={lname} onChange={onChangelname} class='input-line full-width' required></input>
                                                <input type='text' id="FirstName" placeholder='First Name' value={fname} onChange={onChangefname} className='input-line full-width' required></input>
                                            </div>
                                            <input type='email' id="Email" placeholder='Email' value={mail} onChange={onChangeMail} className='input-line full-width' required></input>
                                            <input type="tel" id="phone" name="phone" placeholder='Phone Number' value={phone} onChange={onChangephone} class='input-line full-width ' required></input>
                                            <div className="documents">
                                                <div className="row">
                                                    <label for="resume">Resume</label>
                                                    <input type="file" id="resume" name="resume" accept=".doc,.docx, .pdf"></input>
                                                </div>
                                                <div className="row">
                                                    <label for="cover-letter">Cover letter</label>
                                                    <input type="file" id="cover-letter" name="cover-letter" accept=".doc,.docx, .pdf"></input>
                                                </div>
                                            </div>
                                            <label for="message">Message</label>
                                            <textarea id="message" name="message" rows="3" cols="33" className='input-line full-width'></textarea>
                                        </div>
                                        <div><button className='ghost-round full-width'>Submit</button></div>
                                    </div>
                                </div>
                        </div>
        </form>
    )
}

export default Form_apply;