import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING, GET_ITEM, CLEAR_ITEMS } from '../actions/types';

const initialState = {
    establishments: [],
    item: [],
    currentPage: '',
    numberOfPages: '',
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                establishments: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
                loading: false
            }
        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        case ADD_ITEMS:
            return{
                ...state,
                establishments: [action.payload, ...state.establishments],
                loading: false
            }
        case CLEAR_ITEMS:
            return{
                ...state,
                establishments: []
            }
        case DELETE_ITEM:
            return {
                ...state,
                establishments: state.establishments.filter(item => item._id !== action.payload)
            }
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true,
                item: []
            }
        default:
            return state;
    }
}