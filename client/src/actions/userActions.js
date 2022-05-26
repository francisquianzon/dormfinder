import axios from 'axios';
import { GET_USERS, ITEMS_LOADING } from '../actions/types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getUsers = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/users')
        .then(res => 
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
            
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

// export const deleteEstablishment = id => (dispatch, getState) => {
//     axios.delete(`/establishments/${id}`, tokenConfig(getState)).then(res => 
//         dispatch({
//             type: DELETE_ITEM,
//             payload: id
//         })
//     )
//     .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
// };

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};