import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Footer.css'

class Footer extends Component {
  render() {
    const footerClass = classNames('Footer', {
      visible: this.props.initialized,
    })

    return (
      <div className={footerClass}>
        <span>Footer</span>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
