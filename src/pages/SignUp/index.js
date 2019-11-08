import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/tools.svg';

export default function SingU() {
  return (
    <>
      <img src={logo} alt="Tools" />

      <form>
        <input type="name" placeholder="Nome completo" />
        <input type="email" placeholder="e-mail..." />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login.</Link>
      </form>
    </>
  );
}
