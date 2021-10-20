import React, {Component, useEffect, useState} from 'react';
import Form_modify_job from '../../form/Form_modify_job';
import "./candidacy_card_cmp.css";
import Candidacy_User from '../cadidacy_user/candidacy_user';
import {getAppliedByAdvId} from '../../../services/company.services';
import { deleteAdv } from '../../../services/advertisement.services';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Candidacy_card_cmp = (props) => {

    const [openModify, setopenModify] = useState(null);
    const [AppliedList, setAppliedList] = useState([]);
    const [open, setopen] = useState(false);
    const adv = props.av;

    const handleModify = () => {
        if (openModify)
            setopenModify(false);
        else
            setopenModify(true);
    }

    const changeIsOpen = () => { 
        open ? setopen(false) : setopen(true)
    }

    useEffect(() => {
        let mountain = true
        if(mountain){
            getApplied();
        }
    }, [])

    const getApplied = () => {
        getAppliedByAdvId(adv.id)
        .then((res) => {
            setAppliedList(res.data);
        })
    }

    const reaload = () => {
        window.location.reload();
        handleModify();
    }

    const deleteAd =()=>{
        deleteAdv(adv.id)
        .then(()=>{
            reaload();
        }, (err) => {
            
        })
    }

    return <div className="card_candidacy">
        <h2>{adv.title}</h2>
        <div>
            <div className="manage_area">
                <button onClick={handleModify} className="button" id="modify">Modify</button>
                    <Modal isOpen={openModify} toogle={handleModify}>
                        <ModalHeader toggle={handleModify} charCode="x">Modify</ModalHeader>
                        <Form_modify_job adv={adv} up={() => reaload()} editMode={true}/>
                        <ModalFooter></ModalFooter>
                    </Modal>
                <button className="delete" id="delete" onClick={deleteAd}>Delete</button>
            </div>
            <div className="info">
                <h6>Salaire : {adv.salary}€ brut par an</h6>
                <h6>Type de contrat : {adv.contrat_type}</h6>
                <h6>Mis en ligne : {adv.date.split('T')[0]}</h6>
            </div>
            <p>{adv.descritpion}</p>
            </div>
        <Button className="LearnMoreBtn" onClick={changeIsOpen} style={{ marginBottom: '1rem' }}>See the applications</Button>
        <Collapse isOpen={open}>            
        {AppliedList.map(us => <Candidacy_User user={us} key={us.id}/>)}
        </Collapse>
    </div>
}

export default Candidacy_card_cmp;