import React, { useEffect, useState } from 'react';
import './UserList_admin.css'
import { Button, Table } from 'reactstrap';
import { getUsers, deleteUser } from '../../../../services/admin.services';
import axios from 'axios';
import Adv from '../../../home/advertisement_card/advertisement_card';
import UserCard_admin from '../UserCard/UserCard_admin';
import { useDispatch } from 'react-redux';
import { Modal, ModalHeader } from 'reactstrap';
import Form_admin_user from '../FormUser/Form_admin_user';
import "../../table.css";

const UserList_admin = (props) => {
    const [onEdit, setOnEdit] = useState(false);
    const [currentuser, setCurrentuser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        let mountain = true;
        if (mountain) {
            getUs();
        }
    }, [])

    const edit = (us) => {
        setOnEdit(true); 
        setCurrentuser(us);
        handleApply();
    }
    const deleteUs = (id) => {
        deleteUser(id)
            .then(() => {
                getUs();
            })
    }

    const getUs = () => {
        getUsers()
            .then((res) => {
                const userlist = res.data;
                setUsers(res.data);
            })
    }

    const handleApply = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    const handleCreate = () => {
        setOnEdit(false);
        setCurrentuser(null);
        handleApply();
    }


    return (
        <div>
            <Button id="add_" className="seeMore" color="success" onClick={handleCreate}> Add New User</Button>
            <section className="List">
                <div>
                    {users.map(us => <UserCard_admin deleteUs={(id) => deleteUs(id)} edit={(obj) => edit(obj)} user={us} key={us.id} />)}
                </div>
            </section>
            <Modal isOpen={isOpen} toggle={handleApply}>
                <ModalHeader toggle={handleApply} charCode="x">Apply</ModalHeader>
                <Form_admin_user editMode={onEdit} user={currentuser} />
            </Modal>
        </div>
    )
}
export default UserList_admin;