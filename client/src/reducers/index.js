import estabReducer from './estabReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    establishment: estabReducer,
    authentication: authReducer
})

export default rootReducer;