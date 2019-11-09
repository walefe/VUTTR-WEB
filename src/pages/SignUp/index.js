import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/tools.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('* O nome é obrigatório'),
  email: Yup.string()
    .email('e-mail inválido.')
    .required('* O e-mail é obrigatório'),
});

export default function SingU() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Tools" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="e-mail..." />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login.</Link>
      </Form>
    </>
  );
}
