import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRouter from 'components/AppRouter';
import LocalStorageController from 'controllers/LocalStorage';
import configureStore from 'store';

const releases = new LocalStorageController().getItem('releases') || undefined;
const store = configureStore({ releases: releases && JSON.parse(releases) });

const AppComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
);

export default AppComponent;
