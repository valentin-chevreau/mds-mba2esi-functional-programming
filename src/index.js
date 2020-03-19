// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Functions
import store from './store';

import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
