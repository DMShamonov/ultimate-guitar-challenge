import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import '../assets/sass/app.sass';
import AppComponent from './components/App';

render(
  <AppComponent />,
  document.querySelector('ug-app'),
);
