import axios from "axios";
import authHeader from "./auth.header";

const API_URL = 'http://localhost:3001/';

const getAllLastest =()=> {
    return axios.get(API_URL + 'advertisements');
}

const getAdvById =(id)=>{
    return axios.get(API_URL + 'advertisement/by_id');
}

const applySecret = (user) => {
    return axios.post(API_URL + 'advertisement/apply', user);
}

const editAdv =(adv) => {
    return axios.put(API_URL + 'advertisements/edit', adv);
}

const deleteAdv = (i) => {
    return axios.post(API_URL + 'advertisement/delete', {id: i});
}

const addAdv = (o) => {
    return axios.post(API_URL + 'advertisement/add', o);
}

export {getAllLastest, getAdvById, applySecret, editAdv, deleteAdv, addAdv};