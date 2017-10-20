import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRouter from 'components/AppRouter';
import configureStore from 'store';

const store = configureStore();

const AppComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div style={{ width: '100%', height: '100%' }}>
        <AppRouter />
      </div>
    </Provider>
  </BrowserRouter>
);

export default AppComponent;
