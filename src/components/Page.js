import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Page.css'

import Controls from './Controls'

class Page extends Component {
  render() {
    const pageClass = classNames('Page', {
      someStyle: true,
    })

    return (
      <div className={pageClass}>
        <h2>Page component</h2>
        <span>Go to <Link to="/">Home</Link></span>
        <Controls myProp="Hello Prop!" myOtherProp={{ pageClass }} />
      </div>
    )
  }
}

export default Page
