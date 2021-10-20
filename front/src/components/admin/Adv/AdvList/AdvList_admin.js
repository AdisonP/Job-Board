import React, { useEffect, useState } from 'react';
import { Button, ModalFooter, Table } from 'reactstrap';
import { deleteAdvertisement, getAdvertisements } from '../../../../services/admin.services';
import { Modal, ModalHeader } from 'reactstrap';
import AdvCard_admin from '../AdvCard/AdvCard_admin';
import Form_admin_adv from '../AdvForm/Form_admin_adv';
import "../../table.css";


const AdvList_admin = () => {
    const [advertisements, setAdvertisements] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [currentAdv, setCurrentAdv] = useState(null);

    useEffect(() => {
        let mountain = true;
        if (mountain) {
            getAdv();
        }
    }, [])

    const edit = (adv) => {
        setOnEdit(true);
        setCurrentAdv(adv);
        handleApply();
    }
    const deleteAdv = (id) => {
        deleteAdvertisement(id)
        .then(() => {
            getAdv();
        })
    }

    const getAdv = () => {
        getAdvertisements()
            .then((res) => {
                const advertisementList = res.data;
                setAdvertisements(advertisementList != null ? advertisementList : []);
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
        setCurrentAdv(null);
        handleApply();
    }

    const leaveForm = () => {
        getAdvertisements();
        setIsOpen(false);
    }

    return (
        <div>
            <Button id="add_" className="seeMore" color="success" onClick={handleCreate}> Add New Offer</Button>
            <section className="List">
                <div>
                    {advertisements.map(adv => <AdvCard_admin deleteAdv={(id) => deleteAdv(id)} edit={(obj) => edit(obj)} adv={adv} key={adv.id} />)}
                </div>
            </section>
            <Modal  toggle={handleApply}>
                <ModalHeader toggle={handleApply} charCode="x">Apply</ModalHeader>
                <Form_admin_adv advertisement={currentAdv} editMode={onEdit} leaveForm={() => leaveForm()}/>
            </Modal>
        </div>
    )
}
export default AdvList_admin;