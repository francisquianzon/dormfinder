import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING, GET_ITEM } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getEstablishments = () => async dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/establishments')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
            
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const getEstablishmentBySearch = (searchQuery) => async dispatch => {
    axios
        .get(`/establishments/search?searchQuery=${searchQuery.search}`)
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
}

export const getDetails = id => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/establishments/${id}`)
        .then(res => 
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addEstablishment = estab => (dispatch, getState) => {
    
    axios
        .post('/establishments', estab, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_ITEMS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const uploadImage = imageForm => (dispatch, getState) => {
    axios
        .post('/establishments/image', imageForm, {})

}

export const deleteEstablishment = id => (dispatch, getState) => {
    axios.delete(`/establishments/${id}`, tokenConfig(getState)).then(res => 
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};