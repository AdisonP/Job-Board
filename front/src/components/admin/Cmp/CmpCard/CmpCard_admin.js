import React, { Component, useState } from 'react';
import './CmpCard_admin.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const CmpCard_admin = (props) => {

    const company = props.company;
    const [open, setopen] = useState(false);

    const changeIsOpen = () => { 
        open ? setopen(false) : setopen(true)
    }

    return (
        <div className="Card">
            <div>
                <Button className="seeMore" onClick={changeIsOpen}>Learn more...</Button>
            </div>
            <div>
                <div className="things_we_can_see">
                    <div className="rowUser">
                        <div className="champs">id</div>
                        <td>{company.id}</td>
                    </div>
                    <div className="rowUser">
                        <div className="champs">name</div>
                        <td>{company.name}</td>
                    </div>
                    <div className="rowUser">
                        <div className="champs">email</div>
                        <div>{company.email}</div>
                    </div>
                </div>
                <Collapse isOpen={open}>
                    <div className="rowUser">
                        <div className="champs">postal code</div>
                        <div>{company.postal_code}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">city</div>
                        <div>{company.city}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">phone</div>
                        <div>{company.phone}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">contact name</div>
                        <div>{company.contact_name}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">siret</div>
                        <div>{company.siret}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">activities</div>
                        <div>{company.activities}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">password</div>
                        <div>{company.password}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">roles</div>
                        <div>{company.roles.roles}</div>
                    </div>
                    <div className="rowUser">
                        <Button color="success" onClick={() => props.edit(company)}>Edit</Button>
                        <Button color="danger" onClick={() => props.deleteCp(company.id)}>Delete</Button>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default CmpCard_admin;

