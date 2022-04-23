import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING, GET_ITEM } from '../actions/types';

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

export const getDetails = id => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`http://localhost:5000/establishments/${id}`)
        .then(res => 
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        )
}

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

export const deleteEstablishment = id => dispatch => {
    axios.delete(`/establishments/${id}`).then(res => 
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })    
    )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};