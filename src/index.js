import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Root from "./Root";



const rootEl = document.getElementById('root');

function renderRoot() {
  render((
      <Root/>
  ), rootEl);
}

renderRoot();
if (module.hot) {
  module.hot.accept();
}
