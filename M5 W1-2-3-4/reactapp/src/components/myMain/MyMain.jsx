import Welcome from './welcome/Welcome'
import AllTheBooks from './allTheBooks/AllTheBooks.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import mainStyle from './mainStyle.module.css'

export default function MyMain({arrBooks, CategoryBooks, searchCard, booksFantasy, booksHistory, booksHorror, booksRomance, booksScifi,hendleCLick}) {
    /* console.log(searchCard); */
    //console.log(booksFantasy);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Welcome />
                </Col>
            </Row>
            <AllTheBooks
            booksFantasy={booksFantasy}
            booksHistory={booksHistory}
            booksHorror={booksHorror}
            booksRomance={booksRomance}
            booksScifi={booksScifi}
            arrBooks={arrBooks}
            CategoryBooks = {CategoryBooks}
            searchCard={searchCard}
            hendleCLick={hendleCLick}
            />
        </Container>
    )
}