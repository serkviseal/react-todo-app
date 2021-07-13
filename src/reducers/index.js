import { combineReducers } from "redux";
import showTabReducer from "./showTab";
import tasksReducer from "./tasks";
export default combineReducers({
  tasks: tasksReducer,
  showTab: showTabReducer,
});
