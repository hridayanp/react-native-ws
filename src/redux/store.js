import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { dashboardReducer } from './dashboard/dashboardSlice';
import { loginReducer } from './login/loginSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
});

const persistedDashboardReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedDashboardReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
