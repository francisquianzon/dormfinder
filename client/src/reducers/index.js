import estabReducer from './estabReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    establishment: estabReducer,
    authentication: authReducer,
    error: errorReducer
})

export default rootReducer;