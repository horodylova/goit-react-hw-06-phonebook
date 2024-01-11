import { configureStore } from '@reduxjs/toolkit'
 
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
   
  } from 'redux-persist';

import { persistClicksReducer } from './clicksSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedClicksReducer = persistReducer(persistConfig, persistClicksReducer);

export const store = configureStore({
    reducer: {
      clicks: persistedClicksReducer, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
  });

export const persistor = persistStore(store);



