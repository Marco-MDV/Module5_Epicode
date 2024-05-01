import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styleError from './styleError.css'

export default function ErrorPages() {
  return (
    <Container>
      <Row className='deviceDisplay'>
        <Col xs={12}>
          <div className='d-flex justify-content-center align-items-center w-100 h-100 flex-column'>
            <div className='text-start'>
              <h1>SORRY</h1>
              <h4>we cloudn't find that page</h4>
              <p>Try searching or go to <Link to={'/'} className='link-underline link-underline-opacity-0 text-dark fw-bolder '>EpicoBook home page.</Link></p> 
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12} md={7}>
              <figure className='m-0 figureDog w-100'>
                <img src="https://i.pinimg.com/originals/8f/ef/aa/8fefaa44f99928585b65d34e05556590.png" alt="dog" className='w-100 h-100'/>
              </figure>
            </Col>
            <Col xs={12} md={5}>
              <div className='w-100 h-100 d-flex-column justify-content-center align-content-center'>
                <h5>Rufus</h5>
                <p>
                  Rufus is the name of the dog in the picture. He is a good boy,
                  but he is also a very loyal dog.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
