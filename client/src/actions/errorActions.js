import { GET_ERRORS, CLEAR_ERRORS } from './types';

//RETURN ERRORS
export const returnErrors = (msg, status, id=null) => {
    return{
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

//CLEARE ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};