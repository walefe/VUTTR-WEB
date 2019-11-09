import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './action';

export function* signIn({ payload }) {
  const { email } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
