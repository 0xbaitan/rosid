import React from 'react';

import './App.scss';
import { Provider } from 'react-redux';
import store from '@/store';
import Routes from './Routes';
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
