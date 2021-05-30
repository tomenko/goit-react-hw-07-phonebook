import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* import { PersistGate } from 'redux-persist/integration/react'; */
import App from './App';
import store from './redux/store';

import css from './index.module.css';
//шаг 2
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store/* .store */}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
        <App className = {css}/>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//шаг 2
/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className = {css}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
); */