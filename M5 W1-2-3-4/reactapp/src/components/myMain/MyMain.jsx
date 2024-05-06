import Welcome from './welcome/Welcome'
import AllTheBooks from './allTheBooks/AllTheBooks.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import mainStyle from './mainStyle.module.css'

export default function MyMain({arrBooks, CategoryBooks, searchCard, arrBooksForCategory,hendleCLick, handleDeselected, setHandleDeselected}) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Welcome />
                </Col>
            </Row>
            <AllTheBooks
            arrBooksForCategory={arrBooksForCategory}
            arrBooks={arrBooks}
            searchCard={searchCard}
            hendleCLick={hendleCLick}
            handleDeselected={handleDeselected}
            setHandleDeselected={setHandleDeselected}
            />
        </Container>
    )
}