import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Main from './pages/Main/Main';
import Auth from './pages/Auth/Auth';
import Page404 from './pages/Page404/Page404';

const Routes = (history) => (
  <Router history={history.history}>
    <Switch>
      <Redirect exact path='/gallery' to='/gallery/new' />
      <Redirect exact path='/auth' to='/auth/login' />
      <Redirect exact path='/' to='/gallery' />
      <Route path={`/gallery/:selection`} component={Main} />
      <Route path={`/auth/:dialog`} component={Auth} />
      <Route path="/404" component={Page404} />
      <Route>
        <Redirect to='/404' />
      </Route>
    </Switch>
  </Router>
)

export default Routes;
