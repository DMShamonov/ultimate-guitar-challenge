import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ReleasesPage from 'components/ReleasesPage';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/releases" />} />
    <Route path="/releases" component={ReleasesPage} />
    <Route render={() => <p>NoMatch</p>} />
  </Switch>
);

export default AppRouter;
