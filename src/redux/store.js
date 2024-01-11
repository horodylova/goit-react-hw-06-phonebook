import { configureStore } from '@reduxjs/toolkit';
import clicksReducer from './clicksSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedClicksReducer = persistReducer(persistConfig, clicksReducer);

export const store = configureStore({
    reducer: {
      clicks: persistedClicksReducer, 
    },
  });

export const persistor = persistStore(store);



