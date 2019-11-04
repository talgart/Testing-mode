import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from "./Root";
import  stores from './stores'
import {Provider} from "mobx-react";



const rootEl = document.getElementById('root');

function renderRoot() {
  render((
    <Provider {...stores}>
      <Root/>
    </Provider>
  ), rootEl);
}

renderRoot();
if (module.hot) {
  module.hot.accept();
}
