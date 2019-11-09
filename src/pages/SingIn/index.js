import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/action';

import logo from '~/assets/tools.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('e-mail inválido.')
    .required('* O e-mail é obrigatório'),
});

export default function SingIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handelSubmit({ email }) {
    dispatch(signInRequest(email));
  }

  return (
    <>
      <img src={logo} alt="Tools" />

      <Form schema={schema} onSubmit={handelSubmit}>
        <Input name="email" type="email" placeholder="e-mail..." />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita.</Link>
      </Form>
    </>
  );
}
