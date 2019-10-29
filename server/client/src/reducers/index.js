// este archivo usa el mismo nombre para facilitar la importacion
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});