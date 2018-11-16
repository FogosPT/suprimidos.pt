import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../css/Controls.css'
import { app } from '../actions'

class Controls extends Component {
  render() {
    const controlsClass = classNames('Controls', {})

    return (
      <div className={controlsClass}>
        <p>Redux state + component props:</p>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>

        <p>Actions:</p>
        {!this.props.app.initialized
          ? (
            <button onClick={() => this.props.dispatch(app.initApp())}>
              Dispatch initApp
            </button>
          ) : (
            <button onClick={() => this.props.dispatch(app.resetApp())}>
              Dispatch resetApp
            </button>
          )
        }
        {this.props.app.initialized &&
          <button onClick={() => this.props.dispatch(app.incrementCounter())}>
            Dispatch incrementCounter
          </button>
        }
        {this.props.app.initialized &&
          <button onClick={() => this.props.dispatch(app.toggleTransitions())}>
            Dispatch toggleTransitions
          </button>
        }

        {this.props.app.initialized &&
          <button onClick={() => this.props.dispatch(app.getCascais())}>
            Cascais
          </button>
        }

        {this.props.app.initialized && !this.props.app.data &&
          <button onClick={() => this.props.dispatch(app.loadData())}>
            Dispatch loadData
          </button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Controls)
