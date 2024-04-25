import myFooterStyle from './myFooterStyle.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import InfoLink from './infoLink/InfoLink'
import TextInfo from './textInfo/TextInfo'
import arrayInfoPages from '../../data/arrayInfoPages'
import { useContext } from 'react'
import { ThemeContext } from '../themeContext/ThemeContext'

export default function MyFooter() {
    const {selectTheme} = useContext(ThemeContext)

    return (
        <footer className={(selectTheme?null:'bg-dark') + ' mt-5'}>
            <Container>
                <Row>
                    <Col className='p-3'>
                        <div className={' d-flex justify-content-center align-content-center gap-5 flex-wrap'}>
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