import estabReducer from './estabReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    establishment: estabReducer,
    reviews: reviewReducer,
    users: userReducer,
    authentication: authReducer,
    error: errorReducer
})

export default rootReducer;