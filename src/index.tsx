import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss'

import {MarvelService} from './services/MarvelService';

import reportWebVitals from './reportWebVitals';

const marvelService = new MarvelService();
marvelService.getCharacter(1011052).then(res => console.log(res))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
