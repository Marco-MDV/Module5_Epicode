import { Container, Navbar } from 'react-bootstrap'
import NavbarCollapse from './navBarCollapse/NavbarCollapse.jsx'
import myNavStyle from './myNavStyle.module.css'
import { useContext } from 'react'
import {ThemeContext} from '../themeContext/ThemeContext'
 

export default function MyNav({hendleSearch,arrBooks,selectedBook, removeBook }) {
    const {selectTheme} = useContext(ThemeContext) 

    return (
        <Navbar expand="lg" className={selectTheme?null:'bg-dark'}>
            <Container fluid>
                <Navbar.Brand href="#">EpiBooks!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavbarCollapse
                    arrBooks={arrBooks}
                    hendleSearch={hendleSearch}
                    selectedBook={selectedBook}
                    removeBook={removeBook}
                />
            </Container>
        </Navbar>
    )
}