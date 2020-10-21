import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Order from './Order.jsx';

const Main = (props) => {
  return (
    <section>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/1' />
          <Route path='/:id' component={Order} />
        </Switch>
      </Router>
    </section>
  );
};

export default Main;
