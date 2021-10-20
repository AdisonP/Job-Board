import { Button, Collapse } from "reactstrap";
import React, { Component, useState } from 'react';

import "./UserCard_admin.css";
import "../../table.css";

const UserCard_admin = (props) => {
    const user = props.user;
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
                        <div className="champs">#</div>
                        <div>{user.id}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">First Name</div>
                        <div height="100%">{user.first_name}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Last Name</div>
                        <div>{user.name}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Email</div>
                        <div>{user.email}</div>
                    </div>
                </div>
                <Collapse isOpen={open}>
                    <div className="rowUser">
                        <div className="champs">Gender</div>
                        <div>{user.gender}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Address</div>
                        <div>{user.address}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Postal code</div>
                        <div>{user.postal_code}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">City</div>
                        <div>{user.city}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Phone</div>
                        <div>{user.phone}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">Birth date </div>
                        <div>{user.birth_date}</div>
                    </div>
                    <div className="rowUser">
                        <div className="champs">WebSite</div>
                        <div>{user.website}</div> 
                    </div>
                    <div className="rowUser">
                        <Button color="success" onClick={() => props.edit(user)}>Edit</Button>
                        <Button color="danger" onClick={() => props.deleteUs(user.id)}>Delete</Button>
                    </div>
                </Collapse>
            </div>
        </div>
    )

}

export default UserCard_admin;