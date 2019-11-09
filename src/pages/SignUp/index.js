import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/tools.svg';

export default function SingU() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Tools" />

      <Form onSubmit={handleSubmit}>
        <Input name="nome" type="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="e-mail..." />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login.</Link>
      </Form>
    </>
  );
}
