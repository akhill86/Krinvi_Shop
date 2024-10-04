// src/redux/auth/authActions.js
export const LOGIN_REQUEST = 'auth/loginRequest';
export const LOGIN_SUCCESS = 'auth/loginSuccess';
export const LOGIN_FAILURE = 'auth/loginFailure';

export const SIGNUP_REQUEST = 'auth/signupRequest';
export const SIGNUP_SUCCESS = 'auth/signupSuccess';
export const SIGNUP_FAILURE = 'auth/signupFailure';




// Using createAction for better consistency with Redux Toolkit
import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginFailure = createAction('auth/loginFailure');

export const signupRequest = createAction('auth/signupRequest');
export const signupSuccess = createAction('auth/signupSuccess');
export const signupFailure = createAction('auth/signupFailure');

// src/redux/auth/authActions.js
export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'auth/logout' };
};
