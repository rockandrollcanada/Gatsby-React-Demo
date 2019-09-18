import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Container, Navbar } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header>
    
    <Container>

    <Navbar expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
  <Nav>
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/page-2">Page 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
    
  </Navbar.Collapse>
</Navbar>
  </Container>
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
