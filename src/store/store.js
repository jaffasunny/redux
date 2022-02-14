import { createStore } from "redux";
import { reducers } from "./reducers";

// Creating a store that will keep all of our reducers
const store = createStore(reducers, {});

export default store;
