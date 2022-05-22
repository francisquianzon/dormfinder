import axios from 'axios';
import { GET_REVIEWS, ITEMS_LOADING } from '../actions/types';
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
        // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};