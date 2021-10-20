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

const getUser = (idUser) => {

    return axios.post(API_URL + "user",{id: idUser});
}

const editUser = (user) => {
    return axios.post(API_URL + "user/update",user);
}

export default {getUser, editUser};

