import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './action';

export function* signIn({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('O usuário não está cadastrado!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email } = payload;

    yield call(api.post, 'users', {
      name,
      email,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados.');

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
