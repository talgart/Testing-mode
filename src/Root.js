import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";
class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    )
  }
}
export default Root
