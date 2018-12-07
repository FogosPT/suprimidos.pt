import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Header from './components/Header'
import Container from './components/Container'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import configureStore from './store/configureStore'

//Middlware with logger
const store = configureStore()

function logPageView() {
  console.log('ageview')
  if ("ga" in window) {
    var tracker = window.ga.getAll()[0];
    if (tracker)
        tracker.send("pageview");
  }

}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Container/>
      </Fragment>
    </Router>
  </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
