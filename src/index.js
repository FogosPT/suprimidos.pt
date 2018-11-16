import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Delays from './pages/Delays';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/delays" component={Delays} />
    </Fragment>
  </Router>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
