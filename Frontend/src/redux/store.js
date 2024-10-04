import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/authSlice'; // Import your auth slice reducer
import authSaga from './auth/authSaga';     // Import your auth saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth slice to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the auth saga
sagaMiddleware.run(authSaga);

export default store;