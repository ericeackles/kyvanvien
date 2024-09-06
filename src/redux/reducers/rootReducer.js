import { combineReducers } from 'redux';
import userReducer from './userReducer';
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
});

export default rootReducer;