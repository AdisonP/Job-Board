import React, { Component, useState } from 'react';
import { Button, Collapse } from "reactstrap";
import './AdvCard_admin.css';
import "../../table.css";

const AdvCard_admin = (props) => {

    const adv = props.adv
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
                        <div>{adv.id}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">title</div>
                        <div>{adv.title}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">date</div>
                        <div>{adv.date}</div>
                    </div>
                </div>
                <Collapse isOpen={open}>
                    <div className="rowUser">
                        <div className="champs">companie_id</div>
                        <div >{adv.companie_id}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">description</div>
                        <div>{adv.description}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">published</div>
                        <div>{adv.published}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">contrat_type</div>
                        <div>{adv.contrat_type}</div>
                    </div>
                    <div className="rowUser">
                        <Button color="success" onClick={() => props.edit(adv)}>Edit</Button>
                        <Button color="danger" onClick={() => props.deleteAdv(adv.id)}>Delete</Button>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default AdvCard_admin;

