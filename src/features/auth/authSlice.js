import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setToken = createAsyncThunk("auth/setToken", async (token) => {
  localStorage.setItem("token", token);
});
export const removeToken = createAsyncThunk("auth/removeToken", async () => {
  localStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("token"),
    error: null,
    token: localStorage.getItem("token"),
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(removeToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
