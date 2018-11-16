import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/About.css'

class Notifications extends Component {
  render() {
    const aboutClass = classNames('Notifications', {})

    return (
      <div className={aboutClass}>
        <h2>About component</h2>
        <p>
          <span>Go to <Link to="/">Home</Link></span>
        </p>
      </div>
    )
  }
}

export default Notifications
