import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

export const getEstablishments = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/establishments')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
};

export const addEstablishment = estab => dispatch => {
    axios
        .post('/establishments', estab)
        .then(res => 
            dispatch({
                type: ADD_ITEMS,
                payload: res.data
            })
        )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};