import { createStore, combineReducers } from "redux";
import listRequestReducer from "./list-request-reducer";

let reducers = combineReducers({
    listRequest: listRequestReducer,
});
let store = createStore(reducers);
export default store;
