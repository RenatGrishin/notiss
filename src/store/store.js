import {combineReducers, createStore} from "redux";
import users from "./reducers/usersReducer";
import auth from "./reducers/authReducer";

const reducerNotiss = combineReducers({users, auth});
const store = createStore(reducerNotiss);
export default store;