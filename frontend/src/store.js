import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { noteListReducer } from "./reducers/notesRedcer";
import { noteCreateReducer } from "./reducers/notesRedcer";
import { noteUpdateReducer } from "./reducers/notesRedcer";
import { noteDeleteReducer } from "./reducers/notesRedcer";
import { userUpdateReducer } from "./reducers/userReducers";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const intialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = configureStore({
  reducer,
  intialState,
  // composeWithDevTools(applyMiddleware(...middleware))
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});
export default store;
