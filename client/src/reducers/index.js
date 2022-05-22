import estabReducer from './estabReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    establishment: estabReducer,
    users: userReducer,
    authentication: authReducer,
    error: errorReducer
})

export default rootReducer;