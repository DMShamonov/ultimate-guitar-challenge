import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'assets/sass/app.sass';
import AppRouter from 'components/AppRouter';
import LocalStorageController from 'controllers/LocalStorage';
import configureStore from 'store';
import DevTools from 'components/DevTools';

const initialState = new LocalStorageController().getItem('state') || undefined;
const store = configureStore(initialState ? JSON.parse(initialState) : {}, {
  exclude: ['modals'],
});

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {process.env.NODE_ENV === 'production' ? (
          <AppRouter />
        ) : (
          <div style={{ width: '100%', height: '100%' }}>
            <AppRouter />
            <DevTools />
          </div>
        )}
      </Provider>
    </BrowserRouter>
  );
}
