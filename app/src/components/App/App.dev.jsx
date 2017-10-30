import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRouter from 'components/AppRouter';
import LocalStorageController from 'controllers/LocalStorage';
import configureStore from 'store';
import DevTools from 'components/DevTools';

const initialState = new LocalStorageController().getItem('state') || undefined;
const store = configureStore(JSON.parse(initialState));

const AppComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div style={{ width: '100%', height: '100%' }}>
        <AppRouter />
        <DevTools />
      </div>
    </Provider>
  </BrowserRouter>
);

export default AppComponent;
