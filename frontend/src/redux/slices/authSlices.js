import { createSlice } from "@reduxjs/toolkit";

import {
  setUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../helpers/setUserLocalStorage";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    role: localStorage.getItem("role") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  },

  reducers: {
    addUser: (state, action) => {
      setUserToLocalStorage(
        action.payload.name,
        action.payload.email,
        action.payload.role,
        true,
      );
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
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
export const { addUser, removeUser } = authSlice.actions;
