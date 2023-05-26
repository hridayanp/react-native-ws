import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dateRangeValue: {
      name: '',
      range: {},
    },
    availableWeatherStations: [],
    weatherStation: {
      name: '',
      id: '',
    },
  },
  reducers: {
    setDateRangeValue: (state, action) => {
      state.dateRangeValue = action.payload;
    },

    setAvailableWeatherStations: (state, action) => {
      state.availableWeatherStations = action.payload;
    },

    setWeatherStation: (state, action) => {
      state.weatherStation = action.payload;
    },
  },
});

export const {
  setDateRangeValue,
  setWeatherStation,
  setAvailableWeatherStations,
} = dashboardSlice.actions;

export const selectDateRangeValue = (state) => state.dashboard.dateRangeValue;

export const selectWeatherStation = (state) => state.dashboard.weatherStation;

export const selectAvailableWeatherStations = (state) =>
  state.dashboard.availableWeatherStations;

export const dashboardReducer = dashboardSlice.reducer;
