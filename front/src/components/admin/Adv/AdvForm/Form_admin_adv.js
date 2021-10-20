import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../actions/auth";
import axios from 'axios';
import { Redirect } from "react-router";
import { creatAdvertisement, updateAdvertisement } from "../../../../services/admin.services";
import { Input } from "reactstrap";



const Form_admin_adv = (props) => {

    const editMode = props.editMode;
    const adv = props.advertisement;

    const [id, setId] = useState(adv? adv.id : null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [published, setPublished] = useState("");
    const [companyId, setCompanyId] = useState(0);
    const [contratType, setContratType] = useState("");

    const message = useSelector(state => state.message);

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };
    const onChangeDesc= (e) => {
        const desc = e.target.value;
        setDesc(desc);
    };
    const onChangeDate = (e) => {
        const date = e.target.value;
        setDate(date);
    };
    const onChangePublished = (e) => {
        const pb = e.target.value;
        setPublished(pb);
    };

    const onChangeCpId= (e) => {
        const cpId = e.target.value;
        setCompanyId(cpId);
    };
    const onChangeContratType = (e) => {
        const ct = e.target.value;
        setContratType(ct);
    };

    const sendRegister = (e) => {
        e.preventDefault();

        if(editMode){
            const adve = {
                id: adv.id,
                title: title ? title : null,
                description: desc ? desc : null,
                date: date ? date : null,
                published: published ? published : null,
                companie_id: companyId ? companyId : null,
                contrat_type: contratType ? contratType : null
            };
            updateAdvertisement(adve)
            .then(()=> {
                props.leaveForm();
            })  
        } else {
            const adve = {
                title: title ? title : null,
                description: desc ? desc : null,
                date: date ? date : null,
                published: published ? published : null,
                companie_id: companyId ? companyId : null,
                contrat_type: contratType ? contratType : null
            };
            creatAdvertisement(adve)
                .then(() => {
                    props.leaveForm();
                })
        }
    }

    const fillAdv = () => {
        if (editMode) {
            setTitle(adv.title);
            setDesc(adv.description);
            setDate(adv.date ? adv.date.split('T')[0] : "");
            setPublished(adv.published ? adv.published.split('T')[0] : "");
            setCompanyId(adv.companie_id);
            setContratType(adv.contrat_type);
        }
    }

    useEffect(() => {
        let mountain = true;

        if (mountain) {
            fillAdv();
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
                            <input type='text' id="title" placeholder={editMode ? adv.title : "title"} value={title} onChange={onChangeTitle} class='input-line full-width'></input>
                            <input type='text' id="desc" placeholder={editMode ? adv.description : "description"} value={desc} onChange={onChangeDesc} class='input-line full-width'></input>
                            <input type='date' id="date" placeholder={editMode ? adv.date : "date"} value={date} onChange={onChangeDate} class='input-line full-width'></input>
                            <input type='date' id="published" placeholder={editMode ? adv.published : "published"} value={published} onChange={onChangePublished} class='input-line full-width'></input>
                            <input type='number' id="cpid" placeholder={editMode ? adv.companie_id : 0} value={companyId} onChange={onChangeCpId} class='input-line full-width'></input>
                            <input type='text' id="ctype" placeholder={editMode ? adv.contrat_type : "contrat type"} value={contratType} onChange={onChangeContratType} class='input-line full-width'></input>

                        </div>
                        <div>
                            {editMode ? <button class='ghost-round full-width'>Update Advertisement</button> : <button class='ghost-round full-width'>Create Advertisement</button>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Form_admin_adv;
