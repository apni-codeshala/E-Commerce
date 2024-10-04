import { configureStore } from "@reduxjs/toolkit";

import authSlices from "./slices/authSlices";

const store = configureStore({
  reducer: {
    auth: authSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
