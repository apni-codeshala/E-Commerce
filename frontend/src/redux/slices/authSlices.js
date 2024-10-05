import { createSlice } from "@reduxjs/toolkit";

import {
  setUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../helpers/setUserLocalStorage";

const initialState = {
  name: localStorage.getItem("name") || "",
  email: localStorage.getItem("email") || "",
  role: localStorage.getItem("role") || "",
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    addUser: (state, action) => {
      setUserToLocalStorage(
        action.payload.name,
        action.payload.email,
        action.payload.role,
        false,
      );
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = false;
    },
    addUserWithToken: (state, action) => {
      setUserToLocalStorage(
        action.payload.name,
        action.payload.email,
        action.payload.role,
        true,
        action.payload.token,
      );
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.isLoggedIn = false;
      removeUserFromLocalStorage();
    },
  },
});

export default authSlice.reducer;
export const { addUser, removeUser, addUserWithToken } = authSlice.actions;
