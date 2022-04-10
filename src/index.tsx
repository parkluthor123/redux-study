import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './style/style.css';
import {Provider} from 'react-redux';
import index from './store'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement ? rootElement : document.createElement('div'));

root.render(
  <Provider store={index}>
    <App />
  </Provider>
);