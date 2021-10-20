import React, { Component, useState } from 'react';
import axios from 'axios';
import Apply_form from '../../form/Form_apply';
import '../advertisement_card/advertisement_card.css';
import '../advertisement_card/apply_btn.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse,
  Modal, ModalHeader, ModalBody, ModalFooter, Alert
} from 'reactstrap';
import { useSelector } from 'react-redux';
import applyService from '../../../services/apply.services';


const AdvertisementCard = (props) => {
  const auth = useSelector(state => state.auth);

  const adv = props.adv;

  const [isOpen, setisOpen] = useState(false);
  const [advDetails, setadvDetails] = useState(null);
  const [openApply, setopenApply] = useState(false);

  const [toogle, setToogle] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    if (isOpen) {
      setisOpen(false)
    } else {
      axios.get('http://localhost:3001/advertisement/by_id?id=' + props.adv.id)
        .then(res => {
          const data = res.data[0];
          setadvDetails(data);
          setisOpen(true);
        })
    }
  };

  const handleApply = () => {
    if (auth.isLoggedIn) {
      applyService.apply(auth.user.id, props.adv.id, "je suis motivax")
        .then((res) => {
          setMessage(res.data.message);
          onDismiss();
        })
    } else {
      if (openApply) {
        setopenApply(false);
      } else {
        setopenApply(true);
      }
    }
  }

  const onDismiss =() => {
    setToogle(!toogle);
  }
  return <div className="cardBody">
    <div className="itemCard">
      <div className="itemCardPicture">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="itemCardContent">
        <h4>{adv.title}</h4>
        <p>{adv.name} - {adv.city} - {advDetails != null ? advDetails.contrat_type : ""}</p>
        <p>{isOpen != true ? adv.description.substring(0, 40) + "..." : ""}</p>
        <button className="more" onClick={handleToggle}>Learn more</button>
      </div>
    </div>
    <Collapse isOpen={isOpen}>
      <div className="cardDesc">
        { auth.isLoggedIn ? auth.user.role.roles != "COMPANY" ? <button className="apply_button" onClick={handleApply}>Apply</button> : "" : ""}
        <Alert color="success" isOpen={toogle} toggle={onDismiss} fade={true}>
          {message}
        </Alert>
        <p className="description"> {advDetails != null ? advDetails.description : ""} </p>
      </div>
      <Modal isOpen={openApply} toggle={handleApply}>
        <ModalHeader toggle={handleApply} charCode="x">Apply</ModalHeader>
        <Apply_form idAdv={props.adv.id} />
      </Modal>
    </Collapse>
  </div>

}

export default AdvertisementCard;

