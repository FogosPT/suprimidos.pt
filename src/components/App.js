import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Home from './Home'
import '../css/App.css'
// import Page from './Page'
// import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
// import { getOeste } from '../actions/app';
// import { store } from '../store'

class App extends Component {
  render() {
    const appClass = classNames('App', {})

    return (
      <main>
        <Navbar />

        <Route render={({ location }) => (
          <TransitionGroup className={appClass}>
            <CSSTransition
              key={location.key}
              classNames={this.props.transitions ? 'fade' : ''}
              timeout={this.props.transitions ? 350 : 0}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        <Footer />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  transitions: state.app.transitions,
})

export default connect(mapStateToProps)(App)
