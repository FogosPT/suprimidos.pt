import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import '../css/components/Navbar.css'

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
            <div>
              <Link className="link-button" to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className="link-button" to="/delays">
                <Button color="inherit">Atrasos</Button>
              </Link>
              <Link className="link-button" to="/notifications">
                <Button color="inherit">Notificações</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar
