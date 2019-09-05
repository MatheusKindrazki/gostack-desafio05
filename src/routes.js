import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './app/pages/Home';
import Repository from './app/pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
