import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import { deleteCompany, getCompanies } from '../../../../services/admin.services';
import { useDispatch } from 'react-redux';
import { Modal, ModalHeader } from 'reactstrap';
import CmpCard_admin from '../CmpCard/CmpCard_admin';
import Form_admin_cp from '../CmpForm/Form_admin_cp';
import "../../table.css";


const CmpList_admin = () => {
    const [companies, setCompanies] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [currentCp, setCurrentCp] = useState(null);

    useEffect(() => {
        let mountain = true;
        if (mountain) {
            getCmp();
        }
    }, [])

    const edit = (cp) => {
        setOnEdit(true);
        setCurrentCp(cp);
        handleApply();
    }
    const deleteCp = (id) => {
        deleteCompany(id)
            .then(() => {
                getCmp();
            })
    }

    const getCmp = () => {
        getCompanies()
            .then((res) => {
                const companyList = res.data;
                setCompanies(companyList != null ? companyList : []);
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
        setCurrentCp(null);
        handleApply();
    }

    return (
        <div className="List">
            <Button id="add_" className="seeMore"color="success" onClick={handleApply}> Add New Company</Button>
            <section className="List">
                <div>
                    {companies.map(cmp => <CmpCard_admin deleteCp={(id) => deleteCp(id)} edit={(obj) => edit(obj)} company={cmp} key={cmp.id} />)}
                </div>
            </section>
            <Modal isOpen={isOpen} toggle={handleApply}>
                <ModalHeader toggle={handleApply} charCode="x">Apply</ModalHeader>
                <Form_admin_cp company={currentCp} editMode={onEdit}/>
            </Modal>
        </div>
    )
}
export default CmpList_admin;