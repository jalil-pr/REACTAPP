import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut, registerEvent } from "./authThunk";

const initialState = {
  token: null,
  loading: false,
  userData: {},
  error: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerEvent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerEvent.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.token = null;
      })
      .addCase(registerEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.token = null;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = {};
        state.token = null;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { accessToken, user } = action.payload;
        state.token = accessToken;
        state.userData = user;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.userData = user;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.userData = {};
      });
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
