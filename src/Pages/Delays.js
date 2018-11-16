import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Delays.css'

class Delays extends Component {
  render() {
    const aboutClass = classNames('Delays', {})

    return (
      <div className={aboutClass}>
        <h2>Delays component</h2>
        <p>
          <span>Go to <Link to="/">Home</Link></span>
        </p>
      </div>
    )
  }
}

export default Delays
