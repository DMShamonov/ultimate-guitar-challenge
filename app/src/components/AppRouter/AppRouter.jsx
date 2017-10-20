import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Releases from 'components/Releases';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/releases" />} />
    <Route path="/releases" component={Releases} />
    <Route render={() => <p>NoMatch</p>} />
  </Switch>
);

export default AppRouter;
