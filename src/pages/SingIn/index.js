import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/tools.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('e-mail inválido.')
    .required('* O e-mail é obrigatório'),
});

export default function SingIn() {
  function handelSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Tools" />

      <Form schema={schema} onSubmit={handelSubmit}>
        <Input name="email" type="email" placeholder="e-mail..." />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita.</Link>
      </Form>
    </>
  );
}
