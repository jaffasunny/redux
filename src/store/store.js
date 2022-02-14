import { createStore } from "redux";
import { reducers } from "./reducers";

// Creating a store that will keep all of our reducers
export const store = createStore(reducers, {});
