import React from 'react'
import { Link } from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Suprimidos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav><Link className='nav-link' to="/">Home</Link></Nav>
              <Nav><Link className='nav-link' to="/atrasos">Atrasos</Link></Nav>
              <Nav><Link className='nav-link' to="/notificacoes">Notificações</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}

export default Header