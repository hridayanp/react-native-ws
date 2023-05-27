import Axios from 'axios';
import config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { toast } from 'react-hot-toast';
const axiosApiInstance = Axios.create();

const REACT_NATIVE_API_URL = config.REACT_NATIVE_API_URL;
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const KEEP_LOGGED_IN_KEY = 'keep_logged_in';

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      JSON.parse(await AsyncStorage.getItem(KEEP_LOGGED_IN_KEY))
    ) {
      originalRequest._retry = true;
      const token = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axios.post(
          `${REACT_NATIVE_API_URL}/new_token`,
          '',
          config
        );
        if (res.data.code === 200) {
          await AsyncStorage.setItem(ACCESS_TOKEN_KEY, res.data.access_token);
          axios.defaults.headers.common['Authorization'] =
            'Bearer ' + res.data.access_token;
          axiosApiInstance(originalRequest);
          // Perform necessary actions after token refresh
          // window.location.reload(); // Not applicable in React Native
        }
      } catch (error) {
        // Handle error
      }
    } else if (error.response.status === 401) {
      await AsyncStorage.clear();
      await AsyncStorage.removeItem('persistentState');
      await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
      // Show toast or handle session expiry
      // toast.error('Session expired. Please login again.'); // Not applicable in React Native
      setTimeout(() => {
        // Redirect or perform necessary actions
        // window.location.href = '/'; // Not applicable in React Native
      }, 1000);
    }
    return Promise.reject(error);
  }
);

const handleError = async (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Cant load data! Please check internet connection');
  }
};

let ApiHelper = {
  // Api get function
  get: async (url) => {
    try {
      const response = await axiosApiInstance.get(url);
      return response;
    } catch (error) {
      handleError(error.response);
      return error.response;
    }
  },

  // Api post function
  post: async (url, data) => {
    try {
      const response = await axiosApiInstance.post(url, data);
      return response;
    } catch (error) {
      handleError(error.response);
      return error.response;
    }
  },

  // Api put function
  put: async (url, data) => {
    try {
      const response = await axiosApiInstance.put(url, data);
      return response;
    } catch (error) {
      handleError(error.response);
      return error.response;
    }
  },

  // Api delete function
  delete: async (url) => {
    try {
      const response = await axiosApiInstance.delete(url);
      return response;
    } catch (error) {
      handleError(error.response);
      return error.response;
    }
  },
};

export default ApiHelper;
