import axios from 'axios';
import { GET_USERS, ITEMS_LOADING } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getUsers = () => (dispatch, getState) => {
    dispatch(setItemsLoading());
    axios
        .get('/users', tokenConfig(getState))
        .then(res => 
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
            
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};
