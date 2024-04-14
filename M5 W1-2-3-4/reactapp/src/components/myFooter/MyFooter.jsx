import myFooterStyle from './myFooterStyle.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import InfoLink from './infoLink/InfoLink'
import TextInfo from './textInfo/TextInfo'
import arrayInfoPages from '../../data/arrayInfoPages'

export default function MyFooter() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-center align-content-center gap-5 flex-wrap'>
                            {
                                arrayInfoPages.map((page , index) => {
                                    return (
                                        <InfoLink key={index} text={page} href='#' />
                                    )
                                })
                            }
                        </div>
                        <hr />
                        <div className='text-center'>
                            <TextInfo text="© 2024 EpiBooks, Inc" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}