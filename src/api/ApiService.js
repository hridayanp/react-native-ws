import ApiHelper from './ApiHelper';
import config from '../config';
const REACT_NATIVE_API_URL = config.REACT_NATIVE_API_URL;

// AUTHENTICATION
export const logIn = (data) => {
  return ApiHelper.post(`${REACT_NATIVE_API_URL}/api/token`, data);
};

export const forgotPassword = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/user/api/forgot-password`,
    data
  );
};

export const resetPassword = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/user/api/reset-password`,
    data
  );
};

// DASHBOARD
export const getCurrentWeatherData = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/weather/api/current-weather`,
    data
  );
};

export const getHistoricalWeatherData = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/weather/api/historical-weather`,
    data
  );
};

export const getStationList = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/weather/api/get-station`,
    data
  );
};

// USER MANAGEMENT
export const getUserList = (data) => {
  return ApiHelper.get(`${REACT_NATIVE_API_URL}/user/api/user`, data);
};

export const addUser = (data) => {
  return ApiHelper.post(`${REACT_NATIVE_API_URL}/user/api/user`, data);
};

export const updateUser = (data, userId) => {
  return ApiHelper.put(`${REACT_NATIVE_API_URL}/user/api/user/${userId}`, data);
};

// PROFILE
export const getProfile = (data) => {
  return ApiHelper.get(`${REACT_NATIVE_API_URL}/user/api/profile`, data);
};

export const updateProfile = (data) => {
  return ApiHelper.post(`${REACT_NATIVE_API_URL}/user/api/profile`, data);
};

export const changePassword = (data) => {
  return ApiHelper.post(
    `${REACT_NATIVE_API_URL}/user/api/change-password`,
    data
  );
};
