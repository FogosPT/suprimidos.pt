import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../css/Home.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {
  render() {
    const homeClass = classNames('navbar', {})

    return (
      <div className={homeClass}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Suprimidos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

export default Navbar
