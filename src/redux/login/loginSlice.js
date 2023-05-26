import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = loginSlice.actions;

export const selectIsAuthenticated = (state) => state.login.isAuthenticated;

export const loginReducer = loginSlice.reducer;
