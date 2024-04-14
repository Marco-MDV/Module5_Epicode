import Welcome from './welcome/Welcome'
import AllTheBooks from './allTheBooks/AllTheBooks.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import mainStyle from './mainStyle.module.css'


export default function MyMain() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Welcome />
                </Col>
            </Row>
            <AllTheBooks />
        </Container>
    )
}