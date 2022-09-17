import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
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
import localStorage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'shooting_log',
  storage: localStorage,
};

const rootReducer = combineReducers({ project: projectReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
