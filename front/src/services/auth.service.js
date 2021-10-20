import axios from "axios";

const API_URL = 'http://localhost:3001/';

const login = (mail, password, type) => {
    var link = "login";
    switch(type){
        case("ADMIN") : 
            link += "/admin";
            break;
        case("COMPANY") : 
            link += "/company";
            break;
    }
    return axios.post(API_URL + link, {
        email: mail,
        password: password})
        .then(res => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
}

const register = (lname, fname, mail, password)=> {
    return axios.post(API_URL + 'register', {
        name: fname,
        first_name: lname,
        password: password,
        email: mail});
}

const registerCp = (cp) => {
    return axios.put(API_URL + 'register/cp', cp);
}

const logout = () =>{
    localStorage.removeItem("user");
}

export default {login, register, logout, registerCp}