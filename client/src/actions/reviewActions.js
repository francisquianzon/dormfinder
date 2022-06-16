import axios from 'axios';
import { GET_REVIEWS, ITEMS_LOADING, ADD_REVIEWS } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getReviews = id => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/reviews/${id}`)
        .then(res => 
            dispatch({
                type: GET_REVIEWS,
                payload: res.data
            })
            
        )
};

export const addReview = review => (dispatch, getState) => {
    
    axios
        .post('/reviews', review, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_REVIEWS,
                payload: res.data
            })
        )
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};