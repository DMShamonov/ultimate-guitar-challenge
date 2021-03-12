import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ReleasesPage from 'components/ReleasesPage';

const AppRouter = () => (
  <Switch>
    <Route path="/releases" component={ReleasesPage} />
    <Redirect to="/releases" />
  </Switch>
);

export default AppRouter;
