import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.ts";
// import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}


const combinedReducer = combineReducers({
  cart: cartReducer
})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store)
export default store;
