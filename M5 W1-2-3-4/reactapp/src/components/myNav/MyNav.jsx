import { Container, Navbar} from 'react-bootstrap'
import NavbarCollapse from './navBarCollapse/NavbarCollapse.jsx'
import myNavStyle from './myNavStyle.module.css'


export default function MyNav () {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">EpiBooks!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavbarCollapse />
            </Container>
        </Navbar>
    )
}