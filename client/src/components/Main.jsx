import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Order from './Order.jsx';

const Main = (props) => {
  return (
    <section>
      <Switch>
        <Redirect exact from='/' to='/1' />
        <Route path='/:id' component={Order} />
      </Switch>
    </section>
  );
};

export default Main;
