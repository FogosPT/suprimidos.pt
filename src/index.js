import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Container from './components/Container'
import { BrowserRouter as Router } from "react-router-dom"
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <Fragment>
      <Header />
      <Container />
    </Fragment>
  </Router>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
