// src/redux/auth/authSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './authSlice';

function* handleSignup(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/user/register', action.payload);
    const token = response?.data?.token;
    if (token) {
      localStorage.setItem('token', token);
      yield put(signupSuccess(response.data)); // response.data should include both user and token
    }
  } catch (error) {
    yield put(signupFailure(error.response?.data || 'Signup failed'));
  }
}

function* handleLogin(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/user/login', action.payload);
    const token = response?.data?.token;
    if (token) {
      localStorage.setItem('token', token);
      yield put(loginSuccess(response.data));
    }
  } catch (error) {
    yield put(loginFailure(error.response?.data || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(signupRequest.type, handleSignup);
  yield takeLatest(loginRequest.type, handleLogin);
}
