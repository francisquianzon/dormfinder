import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING, GET_ITEM } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getEstablishments = (page) => async dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/establishments?page=${page}`)
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

export const addEstablishment = estab => async (dispatch, getState) => {

    // console.log('Printing data...')
    // console.log(estab)
    // console.log(estab.pictures)

    dispatch(setItemsLoading())
    
    const imagesArray = await axios.post('/establishments/image', {data: estab.pictures});
    console.log("printing images...")
    console.log(imagesArray.data)
    
    await axios
        .post('/establishments', {data: estab, images: imagesArray.data}, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_ITEMS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const uploadImage = imageForm => async (dispatch, getState) => {
    // axios
    //     .post('/establishments/image', imageForm, {})
    // let imagesArray = []
    // axios
    //     .post('/establishments/image', {data: imageForm})
    //     .then(res =>
    //             imagesArray = res.data
    //             )
    const imagesArray = await axios.post('/establishments/image', {data: imageForm});
    console.log("printing images...")
    console.log(imagesArray.data)
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