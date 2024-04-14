import React from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap'
import NavLink from '../navLink/NavLink'
import NavDropDown from '../navDropDown/NavDropDown.jsx'
export default function NavbarCollapse() {
    return (
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <NavLink 
                href="#"
                text="Home"
                />      
                
                <NavDropDown />

                <NavLink 
                href="#"
                text="Browse"
                />
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    )
}
