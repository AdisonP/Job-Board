import axios from "axios";
import authHeader from "./auth.header";

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

const getUsers = ()=> {
    return axios.get(API_URL + "admin/users/all");
}

const deleteUser = (idUser) => {
    return axios.delete(API_URL + "admin/users/delete", { data : {id: idUser}});
}

const deleteAdvertisement = (idAdv) => {
    return axios.delete(API_URL + "admin/advertisement/delete", { data : {id: idAdv}});
}

const deleteCompany = (idCp) => {
    return axios.delete(API_URL + "admin/company/delete", { data : {id: idCp}});
}

const getCompanies = () => {
    return axios.get(API_URL + "admin/companies/all");
}

const getAdvertisements = () => {
    return axios.get(API_URL + "admin/advertisement/all");
}

const createUser = (user) => {
    return axios.put(API_URL + "admin/users/add", user);
}

const updateUser = (user) => {
    return axios.put(API_URL + "admin/users/update", user);
}

const createCompany = (cp) => {
    return axios.put(API_URL + "admin/companies/add", cp);
}

const updateCompany = (cp) => {
    return axios.put(API_URL + "admin/companies/update", cp);
}

const creatAdvertisement = (adv) => {
    return axios.put(API_URL + "admin/advertisement/create", adv);
}

const updateAdvertisement = (adv) => {
    return axios.put(API_URL + "admin/advertisement/update", adv);
}

export {getUsers, deleteUser, getCompanies, getAdvertisements, deleteCompany, deleteAdvertisement, createUser, updateUser, createCompany, updateCompany, creatAdvertisement, updateAdvertisement};