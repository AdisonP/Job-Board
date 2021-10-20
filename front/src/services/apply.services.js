import axios from "axios";
import authHeader from './auth.header';

const API_URL = 'http://localhost:3001/';

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${authHeader()}`;
        return config;
    },
    error => {
        Promise.reject(error);
    }
)


const getApplied = (idUser) => {
    return axios.post(API_URL + "applied/all",{id: idUser});
}

const deleteApplied = (idApplied) => {
    return axios.post(API_URL + "applied/delete", {id: idApplied});
}

const apply = (idUser, idAdv, motivation) => {
    return axios.post(API_URL + "applied/apply" , {id_user: idUser, id_adv: idAdv, motivation});
}

export default {getApplied, deleteApplied, apply};