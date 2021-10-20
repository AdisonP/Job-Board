import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import authHeader from "../../services/auth.header";
import peopleService from '../../services/people.services';
import "./id_form.css"

const Form_account = (props) => {
    const bundle = useSelector(state => state.auth);
    const user = bundle.user;

    var currentUser = null;

    const [mail, setmail] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [psw, setpsw] = useState("");
    const [adress, setadress] = useState("");
    const [city, setcity] = useState("");
    const [postalcode, setpostalcode] = useState("");
    const [phone, setphone] = useState("");
    const [birthdate, setbirthdate] = useState("undefined");

    const onChangeMail = (e) =>{
        setmail(e.target.value);
    };
    const onChangefname = (e) =>{
        const fname = e.target.value; 
        setfname(fname);
    };
    const onChangelname = (e) =>{
        const lname = e.target.value; 
        setlname(lname);
    };
    const onChangepsw = (e) =>{
        const psw = e.target.value; 
        setpsw(psw);
    };
    const onChangeadress = (e) =>{
        const adress = e.target.value; 
        setadress(adress);
    };
    const onChangecity = (e) =>{
        const city = e.target.value; 
        setcity(city);
    };
    const onChangepostalcode = (e) =>{
        const postalcode = e.target.value; 
        setpostalcode(postalcode);
    };
    const onChangephone = (e) =>{
        const phone = e.target.value; 
        setphone(phone);
    };
    const onChangebirthdate = (e) =>{
        const birthdate = e.target.value; 
        setbirthdate(birthdate);
    };

   useEffect(() => {
    peopleService.getUser(bundle.user.id)
    .then((res)=> {
        currentUser = res.data[0]

        if(mail != currentUser.mail && birthdate == "undefined"){
        setbirthdate(currentUser.birth_date)
        setlname(currentUser.name);
        setfname(currentUser.first_name);
        setmail(currentUser.email);
        setadress(currentUser.address);
        setcity(currentUser.city);
        setpostalcode(currentUser.postal_code);
        setpsw("password");
        }
    }, (err)=> {
    })
   })
    

    const save = (e) => {
        e.preventDefault();
        
        const user = {id: bundle.user.id, name: fname, last_name: lname, email: mail, address: adress, postal_code: postalcode, city: city, birth_date: birthdate, password: psw != "password" && psw != "" ? psw : null}
        peopleService.editUser(user)
        .then((res)=>{
        }, (err) => {
        })
    }


    return(
        <div>
        <form id="form_account_zone"onSubmit={save}>
                <div class='bold-line'></div>
                    <div class='container'>
                        <div class='window' id="form_account">
                            <div class='overlay'></div>
                                <div class='content'>
                                    <div class='welcome'>Account</div>
                                            <div class='input-fields'>
                                                <input type='text' id="fname" placeholder='First Name' value={fname} onChange={onChangefname} class='input-line full-width'></input>
                                                <input type='text' id="lname" placeholder='Last Name' value={lname} onChange={onChangelname} class='input-line full-width'></input>
                                                <input type='email' id="Email" placeholder='Email' value={mail} onChange={onChangeMail} class='input-line full-width'></input>
                                                <input type='text' id="adress" placeholder='Adress' value={adress} onChange={onChangeadress} class='input-line full-width'></input>
                                                <input type='text' id="city" placeholder='City' value={city} onChange={onChangecity} class='input-line full-width'></input>
                                                <input type='number' id="zip" placeholder='Zip' value={postalcode} onChange={onChangepostalcode} class='input-line full-width'></input>
                                                <input type='date' id="birthdate" placeholder='Birthdate' value={birthdate} onChange={onChangebirthdate} class='input-line full-width'></input>
                                                <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangepsw} class='input-line full-width'></input>
                                            </div>
                                            <br></br>
                                    <div><button class='ghost-round full-width'>Save</button></div>
                                </div>
                            </div>
                        </div>
                        
            </form>
            </div>
    )
}

export default Form_account;