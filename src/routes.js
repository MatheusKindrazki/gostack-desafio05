import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './app/pages/Home';
import Repository from './app/pages/Repository';

export default function Routes() {
  console.log('This is the process.env', process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
