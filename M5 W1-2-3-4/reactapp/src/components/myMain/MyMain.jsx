import Welcome from './welcome/Welcome'
import AllTheBooks from './allTheBooks/AllTheBooks.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import mainStyle from './mainStyle.module.css'
import { useState } from 'react'

export default function MyMain({arrBooks, CategoryBooks, searchCard, arrBooksForCategory,hendleCLick}) {
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
            CategoryBooks = {CategoryBooks}
            searchCard={searchCard}
            hendleCLick={hendleCLick}
            />
        </Container>
    )
}