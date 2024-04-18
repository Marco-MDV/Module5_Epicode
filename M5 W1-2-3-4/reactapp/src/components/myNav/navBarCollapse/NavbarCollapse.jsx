import React, { useState } from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap'
import NavLink from '../navLink/NavLink'
import NavDropDown from '../navDropDown/NavDropDown.jsx'
import Modal from './modal/AllTheBooks.jsx'
import myNavStyle from '../myNavStyle.module.css'

export default function NavbarCollapse({hendleSearch,arrBooks, selectedBook}) {
    const [input, setInput] = useState('');

    const heandleInputName = (e) =>{
        setInput(e.target.value)
    }

    const filtercard = () =>{
        const filteredBooks = arrBooks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
        return hendleSearch(filteredBooks)
    }

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

                <Modal
                selectedBook={selectedBook}
                />
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search your book..."
                    className="me-2"
                    aria-label="Search"
                    onChange={heandleInputName}
                />
                <button onClick={(e) => {filtercard(e);e.preventDefault()}} className={myNavStyle.myButton + ' rounded text-white '}>Search</button>
            </Form>
        </Navbar.Collapse>
    )
}
