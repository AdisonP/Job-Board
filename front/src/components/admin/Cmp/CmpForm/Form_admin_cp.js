import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../actions/auth";
import axios from 'axios';
import { Redirect } from "react-router";
import { createCompany, updateCompany } from "../../../../services/admin.services";
import { Input } from "reactstrap";



const Form_admin_cp = (props) => {

    const editMode = props.editMode;
    const company = props.company;

    const [id, setId] = useState(company ? company.id : null);
    const [mail, setmail] = useState("");
    const [psw, setpsw] = useState("");
    const [name, setname] = useState("");
    const [activities, setActivities] = useState("");
    const [postalCode, setPostalCode] = useState(0);
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState(0);
    const [siret, setSiret] = useState(0);
    const [website, setWebsite] = useState("");
    const [employe, setEmploye] = useState(0);
    const [contactName, setContactName] = useState("");
    const [roles, setRoles] = useState({roles : "COMPANY"});

    const message = useSelector(state => state.message);

    const onChangeName = (e) => {
        const name = e.target.value;
        setname(name);
    };
    const onChangeCName = (e) => {
        const cname = e.target.value;
        setContactName(cname);
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

    const onChangeSiret = (e) => {
        const s = e.target.value;
        setSiret(s);
    };

    const onChangeWebsite = (e) => {
        const ws = e.target.value;
        setWebsite(ws);
    };

    const onChangeEmploye = (e) => {
        const ep = e.target.value;
        setEmploye(ep);
    };

    const onChangeActivities = (e) => {
        const ac = e.target.value;
        setActivities(ac);
    };

    const sendRegister = (e) => {
        e.preventDefault();

        if(editMode){
            const cp = {
                id: company.id,
                name: name ? name : null,
                contact_name: contactName ? contactName : null,
                email: mail ? mail : null,
                password: psw ? psw : null,
                postal_code: postalCode ? postalCode : null,
                city: city ? city : null,
                website: website ? website : null,
                roles: roles,
                phone: phone ? phone : null,
                activities: activities ? activities : null,
                number_employes: employe ? employe : null,
                siret: siret ? siret : null
            };
            updateCompany(cp)
                .then(() => {
                })
        } else {
            const user = {
                name: name ? name : null,
                contact_name: contactName ? contactName : null,
                email: mail ? mail : null,
                password: psw ? psw : null,
                postal_code: postalCode ? postalCode : null,
                city: city ? city : null,
                website: website ? website : null,
                phone: phone ? phone : null,
                activities: activities ? activities : null,
                number_employes: employe ? employe : null,
                siret: siret ? siret : null
            };
            createCompany(user)
                .then(() => {
                })
        }
    }

    const fillCompany = () => {
        if (editMode) {
            setname(company.name);
            setContactName(company.contact_name)
            setmail(company.email);
            setSiret(company.siret);
            setEmploye(company.number_employes);
            setpsw("password");
            setPostalCode(company.postal_code);
            setCity(company.city);
            setWebsite(company.website);
            setPhone(company.phone)
        }
    }

    useEffect(() => {
        let mountain = true;

        if (mountain) {
            fillCompany();
        }
    }, [])

    return (
        <form onSubmit={sendRegister}>
            <div class='bold-line'></div>
            <div class='container'>
                <div class='window'>
                    <div class='overlay'></div>
                    <div class='content'>
                        <div class='welcome'>{editMode ? "Update user" : "Create user"}</div>
                        <div class='input-fields'>
                            <input type='text' id="Name" placeholder={editMode ? company.name : 'Name'} value={name} onChange={onChangeName} class='input-line full-width'></input>
                            <input type='text' id="ContactName" placeholder={editMode ? company.contact_name : 'Contact Name'} value={contactName} onChange={onChangeCName} class='input-line full-width'></input>
                            <input type='mail' id="Email" placeholder={editMode ? company.email : 'Email'} value={mail} onChange={onChangeMail} class='input-line full-width'></input>
                            <input type='password' id="Password" placeholder='Password' value={psw} onChange={onChangePsw} class='input-line full-width'></input>
                            <input type='text' id="Activities" placeholder={editMode ? company.activities : 'Activities'} value={activities} onChange={onChangeActivities} class='input-line full-width'></input>
                            <input type='number' id='postalCode' placeholder={editMode ? company.postal_code : 'postal code'} value={postalCode} onChange={onChangePostalCode} class='input-line full-width'></input>
                            <input type='text' id='city' placeholder={editMode ? company.city : 'city'} value={city} onChange={onChangeCity} class='input-line full-width'></input>                      
                            <input type='number' id='phone' placeholder={editMode ? company.phone : 'phone'} value={phone} onChange={onChangePhone} class='input-line full-width'></input>
                            <input type='number' id='employes' placeholder={editMode ? company.number_employes : 'number of employes'} value={employe} onChange={onChangeEmploye} class='input-line full-width'></input>
                            <input type='number' id='siret' placeholder={editMode ? company.siret : 'siret'} value={siret} onChange={onChangeSiret} class='input-line full-width'></input>
                        </div>
                        <div>
                            {editMode ? <button class='ghost-round full-width'>Update Company</button> : <button class='ghost-round full-width'>Create Company</button>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Form_admin_cp;


