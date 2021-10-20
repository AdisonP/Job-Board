import React, { Component, useEffect, useState } from 'react';
import Candidacy_card_cmp from './candidacy_card/candidacy_card_cmp';
import Candidacy_list_cmp from './candidacy_list/candidacy_list_cmp';
import {getAdvByCpId} from '../../services/company.services';
import { useSelector } from "react-redux";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse,
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form_modify_job from '../form/Form_modify_job';



const Company = () => {
    const [advList, setAdvList] = useState([]);
    const auth = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(false);

    const handle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        let mountain = true;
        if(mountain){
            getAdv();
        }
    }, [])

    const getAdv = () => {
        getAdvByCpId(auth.user.id)
        .then((res) => {
            setAdvList(res.data);
        })
    }

    const reaload = () => {
       // window.location.reload();
    }

    return <div id="company">
        <button onClick={handle}> Add </button>
        <Modal isOpen={isOpen} toogle={handle}>
                        <ModalHeader toggle={handle} charCode="x">Modify</ModalHeader>
                        <Form_modify_job id={auth.user.id} up={() => reaload()} editMode={false}/>
                        <ModalFooter></ModalFooter>
                    </Modal>
        {advList.map(adv => <Candidacy_card_cmp av={adv} key={adv.id}/>)}
    </div>
}

export default Company;