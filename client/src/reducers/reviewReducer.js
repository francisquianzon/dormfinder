import { GET_REVIEWS, ADD_REVIEWS, ITEMS_LOADING } from '../actions/types';

const initialState = {
    reviews: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                loading: false
            }
        case ADD_REVIEWS:
            return{
                ...state,
                reviews: [action.payload, ...state.reviews]
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