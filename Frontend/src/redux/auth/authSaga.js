import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './authSlice';

// Define API calls
const api = {
  register: (email, password) =>
    axios.post('http://localhost:5000/user/register', { email, password }),
  login: (email, password) =>
    axios.post('http://localhost:5000/user/login', { email, password }),
};

// Worker saga for registration
function* registerSaga(action) {
  try {
    const response = yield call(api.register, action.payload.email, action.payload.password);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.response?.data?.message || 'Registration failed'));
  }
}

// Worker saga for login
function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload.email, action.payload.password);
    yield put(loginSuccess(response.data.token)); // Store token as user
  } catch (error) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

// Watcher saga
export function* rootSaga() {
  yield takeLatest(registerRequest.type, registerSaga);
  yield takeLatest(loginRequest.type, loginSaga);
}
