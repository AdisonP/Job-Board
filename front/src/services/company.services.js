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

const getAppliedByAdvId = (i) => {
    return axios.post(API_URL + "company/advertisements/applied/user", {id: i});
}

const getAdvByCpId = (i) => {
    return axios.post(API_URL + "company/advertisements", {id: i});
}

export {getAppliedByAdvId, getAdvByCpId};