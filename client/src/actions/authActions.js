import axios from 'axios';
// import auth from '../../../middleware/auth';
import { returnErrors } from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({
        type: USER_LOADING
    });
    
    //fetch the user
    axios.get('/auth/user/', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}

//Register User
export const register = ({ name, username, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }   
    }

    //Request Body 
    const body = JSON.stringify({ name, username, email, password });

    axios.post('/users', body, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
        })
    )
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        })
    })
}

//Login User
export const login = ({email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }   
    }

    //Request Body 
    const body = JSON.stringify({email, password });

    axios.post('/auth', body, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
        })
    )
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        })
    })
}

//Logout User
export const logout = () => {
    console.log("LOGGING OUT...")
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = getState => {
    //Get token from local storage
    const token = getState().authentication.token;

    //Headers
    const config = {
        headers: {
            "Content-Type" : "application/json",
        }
    }

    //If token, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }

    return config;

}