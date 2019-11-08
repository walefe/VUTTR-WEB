import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/tools.svg';

export default function SingIn() {
  return (
    <>
      <img src={logo} alt="Tools" />

      <form>
        <input type="email" placeholder="e-mail..." />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita.</Link>
      </form>
    </>
  );
}
