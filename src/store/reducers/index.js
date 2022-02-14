import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// Store takes key value pair
const reducers = combineReducers({
	account: accountReducer,
});

export default reducers;
