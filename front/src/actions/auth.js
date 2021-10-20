import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from '../actions/types';
import AuthServices from '../services/auth.service';


export const register = (lname, fname, mail, password) => (dispatch) => {
    return AuthServices.register(lname, fname, mail, password).then((res) => {
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch({
                type: SET_MESSAGE,
                payload: res.data.message
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: res.data.message
            });
        }

        return Promise.resolve();
    }, (err) => {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    });
};

export const registerCp = (cp) => (dispatch) => {
    return AuthServices.registerCp(cp).then((res) => {
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
            dispatch({
                type: SET_MESSAGE,
                payload: res.data.message
            });
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: res.data.message
            });
        }

        return Promise.resolve();
    }, (err) => {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    });
};

export const login = (mail, psw, type) => (dispatch) => {
    return AuthServices.login(mail, psw, type).then((data) => {
        if(data.error){
            dispatch({
                type: SET_MESSAGE,
                payload: data.message
            });
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data }
            });
        }

        return Promise.resolve();
    }, (err) => {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        dispatch({
            type: LOGIN_FAIL
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    })
}

export const logout = () => (dispatch) => {
    AuthServices.logout();

    dispatch({
        type: LOGOUT
    });
}

