import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Best Beers for Software Engineers</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allbeers">Check the List</Nav.Link>
                            <Nav.Link as={Link} to="/beer-by-type">Search by Type</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar