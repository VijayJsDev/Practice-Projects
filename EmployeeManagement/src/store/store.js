import { createStore, combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  employeeList: employeeReducer,
});

export const store = createStore(rootReducer);
