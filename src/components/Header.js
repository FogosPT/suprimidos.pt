import React from 'react'
import { Link } from "react-router-dom"
import { Container, Navbar, Nav, OverlayTrigger,Tooltip } from 'react-bootstrap'

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
              <Nav><a className='nav-link' href="https://twitter.com/suprimidospt" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></Nav>
              <Nav><a className='nav-link' href="https://play.google.com/apps/testing/com.tomahock.suprimidos" target="_blank" rel="noopener noreferrer"><i className="fab fa-android"></i></a></Nav>
              <Nav><LinkWithTooltip tooltip={<span>Brevemente</span>} href="#" id="tooltip"><i className="fab fa-apple"></i></LinkWithTooltip></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    )
  }
}

function LinkWithTooltip({ id, children, href, tooltip }) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement="bottom"
      delayShow={300}
      delayHide={150}
    >
      <a className='nav-link' href={href}>{children}</a>
    </OverlayTrigger>
  );
}


export default Header