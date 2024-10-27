import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/store/authSlice';
import cartReducer from '@/store/cartSlice';
import productReducer from '@/store/productSlice';
import loadingReducer from '@/store/loadingSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      cartReducer,
      productReducer,
      loadingReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false })
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];