import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
