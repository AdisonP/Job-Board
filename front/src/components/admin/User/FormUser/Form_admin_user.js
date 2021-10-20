import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../actions/auth";
import axios from 'axios';
import { Redirect } from "react-router";
import { createUser, updateUser } from "../../../../services/admin.services";
import { Input } from "reactstrap";



const Form_admin_user = (props) => {

    const editMode = props.editMode;
    const user = props.user;

    const [mail, setmail] = useState("");
    const [psw, setpsw] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState(0);
    const [cv, setCv] = useState(9);
    const [website, setWebsite] = useState("");
    const [picture, setPicture] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [admin, setadmin] = useState({ roles: "USER" });
    const [birthD, setBirthD] = useState("");
    const [id, setId] = useState(user ? user.id : null)

    const [loading, setloading] = useState(false);

    const message = useSelector(state => state.message);

    const onChangeFName = (e) => {
        const fname = e.target.value;
        setfname(fname);
    };
    const onChangeLName = (e) => {
        const lname = e.target.value;
        setlname(lname);
    };
    const onChangeMail = (e) => {
        const mail = e.target.value;
        setmail(mail);
    };
    const onChangePsw = (e) => {
        const psw = e.target.value;
        setpsw(psw);
    };

    const onChangePostalCode = (e) => {
        const pc = e.target.value;
        setPostalCode(pc);
    };
    const onChangeCity = (e) => {
        const ct = e.target.value;
        setCity(ct);
    };

    const onChangePhone = (e) => {
        const pn = e.target.value;
        setPhone(pn);
    };

    const onChangeCv = (e) => {
        const c = e.target.value;
        setCv(c);
    };

    const onChangeWebsite = (e) => {
        const ws = e.target.value;
        setWebsite(ws);
    };

    const onChangePicture = (e) => {
        const pt = e.target.value;
        setPicture(pt);
    };

    const onChangeGender = (e) => {
        const gr = e.target.value;
        setGender(gr);
    };

    const onChangeBirthD = (e) => {
        const dt = e.target.value;
        setBirthD(dt);
    }

    const sendRegister = (e) => {
        e.preventDefault();

        if(editMode){
            const user = {
                id: id,
                name: lname ? lname : null,
                first_name: fname ? fname : null,
                email: mail ? mail : null,
                password: psw ? psw : null,
                address: address ? address : null,
                postal_code: postalCode ? postalCode : null,
                city: city ? city : null,
                cv: cv ? cv : null,
                website: website ? website : null,
                picture: picture ? picture : null,
                gender: gender ? gender : null,
                roles: admin,
                phone: phone ? phone : null,
                birth_date: birthD ? birthD : null
            };
            updateUser(user)
                .then(() => {
                })
        } else {
            const user = {
                name: lname,
                first_name: fname,
                email: mail,
                password: psw,
                address: address,
                postal_code: postalCode,
                city: city,
                cv: cv,
                website: website,
                picture: picture,
                gender: gender ? gender : null,
                roles: admin,
                phone: phone,
                birth_date: birthD
            };
            createUser(user)
                .then(() => {
                })
        }
    }

    const fillUser = () => {
        if (editMode) {
            setfname(user.first_name);
            setlname(user.name);
            setmail(user.email);
            setpsw("password");
            setAddress(user.addres);
            setPostalCode(user.postal_code);
            setCity(user.city);
            setCv(user.cv);
            setWebsite(user.website);
            //setGender(user.gender);
            //setadmin({roles : user.roles.roles});
            setPhone(user.phone)
            setBirthD(user.birth_date ? user.birth_date.split('T')[0] : "");
        }
    }

    useEffect(() => {
        let mountain = true;

        if (mountain) {
            fillUser();
        }
    }, [])

    const onChangeRoles = (e) => {
        const roles = e.target.value
        setadmin({ roles: roles });
    }

    return (
        <form onSubmit={sendRegister}>
            <div class='bold-line'></div>
            <div class='container'>
                <div class='window'>
                    <div class='overlay'></div>
                    <div class='content'>
                        <div class='welcome'>{editMode ? "Update user" : "Create user"}</div>
                        <div class='input-fields'>
                            <input type='text' id="Name" placeholder={editMode ? user.name : 'Name'} value={lname} onChange={onChangeLName} class='input-line full-width'></input>
                            <input type='text' id="FirstName" placeholder={editMode ? user.first_name : 'First Name'} value={fname} onChange={onChangeFName} class='input-line full-width'></input>
                            <input type='mail' id="Email" placeholder={editMode ? user.email : 'Email'} value={mail} onChange={onChangeMail} class='input-line full-width'></input>
                            <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangePsw} class='input-line full-width'></input>
                            <input type='date' id="birth" onChange={onChangeBirthD} placeholder='birthdate' class='input-line full-width' value={birthD}></input>
                            <input type='number' id='postalCode' placeholder={editMode ? user.postal_code : 'postal code'} value={postalCode} onChange={onChangePostalCode} class='input-line full-width'></input>
                            <input type='text' id='city' placeholder={editMode ? user.city : 'city'} value={city} onChange={onChangeCity} class='input-line full-width'></input>
                            <input type='number' id='phone' placeholder={editMode ? user.phone : 'phone'} value={phone} onChange={onChangePhone} class='input-line full-width'></input>
                            <Input type="select" name="select" id="exampleSelect" onChange={onChangeRoles}>
                                <option selected={editMode ? JSON.parse(user.roles).roles == ("USER") ? true : false : true}>USER</option>
                                <option selected={editMode ? JSON.parse(user.roles).roles == ("ADMIN") ? true : false : false} >ADMIN</option>
                            </Input>
                            <Input type="select" name="select" id="exampleSelect" onChange={onChangeGender}>
                                <option selected={editMode ? user.gender == ("homme") ? true : false : false}>homme</option>
                                <option selected={editMode ? user.gender == ("femme") ? true : false : false}>femme</option>
                                <option selected={editMode ? user.gender == ("autre") ? true : false : false} >autre</option>
                            </Input>
                        </div>
                        <div>
                            {editMode ? <button class='ghost-round full-width'>Update Account</button> : <button class='ghost-round full-width'>Create Account</button>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Form_admin_user;
