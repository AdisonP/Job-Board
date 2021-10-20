import React, {useState} from 'react';
import "./Form_sign.css";
import { editAdv, addAdv } from '../../services/advertisement.services';

const Form_modify_job = (props) => {
    const adv = props.adv;
    const isEdit = props.editMode;
    const adId = props.id;

    const [title, setTitle] = useState(adv ? adv.title : "");
    const [desc, setDesc] = useState(adv ? adv.description : "");
    const [ct, setCt] = useState(adv ? adv.contrat_type : "");
    const [salary, setSalary] = useState(adv ? adv.salary : 0);
    const [date, setDate] = useState(adv ? adv.date.split('T')[0] : "");

    const onChangeTitle = (e) => {
        const ttle = e.target.value;
        setTitle(ttle);
    }
    const onChangeCt = (e) => {
        const c = e.target.value;
        setCt(c);
    }
    const onChangeDesc = (e) => {
        const d = e.target.value;
        setDesc(d);
    }
    const onChangeSalary = (e) => {
        const s = e.target.value;
        setSalary(s);
    }

    const onChangeDate = (e) => {
        const d = e.target.value;
        setDate(d);
    }

    const edit = (e) => {
        e.preventDefault();
        const ad = {id: adv ? adv.id : adId, title: title, description: desc, contrat_type: ct, salary: salary, date: date};
        isEdit ? editAdv(ad) : addAdv(ad)
        .then(() => {
            props.up();
        })
    }

    return <form onSubmit={edit}>
            <div className='bold-line'></div>
                <div className='container'>
                    <div className='window'>
                        <div className='overlay'></div>
                            <div className='content'>
                                <div className='welcome'>Modify</div>
                                    <div className='subtitle'>an offer</div>
                                        <div className='input-fields'>
                                            <div className="row">
                                                <input type='text' id="title" placeholder='Title' value={title} onChange={onChangeTitle} className='input-line full-width'></input>
                                                <input type='text' id="desc" placeholder='Descitpion' value={desc} onChange={onChangeDesc} className='input-line full-width'></input>
                                                <input type='text' id="contract" placeholder='Type of contract' value={ct} onChange={onChangeCt} className='input-line full-width'></input>
                                                <input type='number' id="salary" placeholder='Salary' value={salary} onChange={onChangeSalary} className='input-line full-width'></input>
                                                <input type='date' id="date" placeholder='Date' value={date} onChange={onChangeDate} className='input-line full-width'></input>
                                            </div>
                                            <label for="descripton">Description</label>
                                            <textarea id="description" name="description" rows="3" cols="33" value={desc} onChange={onChangeDesc} className='input-line full-width'></textarea>
                                        </div>
                                        <div><button className='ghost-round full-width'>Modify</button></div>
                                    </div>
                                </div>
                        </div>
        </form>
}

export default Form_modify_job;