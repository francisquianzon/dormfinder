import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    establishments: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                establishments: action.payload,
                loading: false
            }
        case ADD_ITEMS:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}