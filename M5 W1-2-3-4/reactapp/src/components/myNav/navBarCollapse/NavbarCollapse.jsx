import React, { useState } from 'react'
import {Form, Nav, Navbar } from 'react-bootstrap'
import NavLink from '../navLink/NavLink'
import NavDropDown from '../navDropDown/NavDropDown.jsx'
import Modal from './modal/AllTheBooks.jsx'
import myNavStyle from '../myNavStyle.module.css'
import Switch from '../../switch/Switch.jsx'
import { Link } from 'react-router-dom'

export default function NavbarCollapse({hendleSearch,arrBooks, selectedBook, removeBook, handleDeselected, setHandleDeselected }) {
    const [input, setInput] = useState('');

    const heandleInputName = (e) =>{
        if (e.target.value != ' ') {
            setInput(e.target.value)
        }
    }

    const filtercard = () =>{
        if (input != '') {
            /* console.log(input); */
            const filteredBooks = arrBooks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
            return hendleSearch(filteredBooks)
        }
    }

    return (
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to='/' className='link-underline link-underline-opacity-0'>Home</Link>
                
                <NavDropDown />

                <Switch/>

                {/* <Modal
                    removeBook={removeBook}
                    selectedBook={selectedBook}
                    handleDeselected={handleDeselected}
                    setHandleDeselected={setHandleDeselected}
                /> */}
                
            </Nav>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search your book..."
                    className="me-2"
                    aria-label="Search"
                    onChange={heandleInputName}
                />
                <button data-testid='searchCardButton' onClick={(e) => {filtercard(e);e.preventDefault()}} className={myNavStyle.myButton + ' rounded text-white '}>Search</button>
            </Form>
        </Navbar.Collapse>
    )
}
