import React from 'react'
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'

class Header extends React.Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>Suprimidos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav><Link className='nav-link' to="/">Home</Link></Nav>
            <Nav><Link className='nav-link' to="/atrasos">Atrasos</Link></Nav>
            <Nav><Link className='nav-link' to="/notificacoes">Notificações</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    )
  }
}

export default Header