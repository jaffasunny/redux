import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

// Store takes key value pair
export const reducers = combineReducers({
	account: accountReducer,
});
