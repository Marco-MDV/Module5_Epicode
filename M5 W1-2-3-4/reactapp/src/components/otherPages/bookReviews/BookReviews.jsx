import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Table, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import styleBookReviews from './styleBookReviews.css'
import Loader from '../../loader/Loader'
import MyError from '../../myError/MyError'
import { ThemeContext } from '../../themeContext/ThemeContext'
import ErrorPages from '../errorPages/ErrorPages'

export default function BookReviews({ arrBooks }) {
  const asinParams = useParams()
  const asin = asinParams.asin

  const [showData, setShowData] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [showErrorMessage, setShowErrorMessge] = useState(false)

  const [feeds, setfeeds] = useState([])
  const GetBookReviews = async (asin) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI0MjE1NGFmYTQ4NjAwMWFjZTEyMDEiLCJpYXQiOjE3MTM2NDM4NjAsImV4cCI6MTcxNDg1MzQ2MH0.Kcliqi-JyGtB4uBwvl6cuXskhf4iICwA5DMJMy1Ylsc',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if (response.ok) {
        setfeeds(data)
        setShowLoader(false)
        setShowData(true)
      }
    } catch (error) {
      setShowErrorMessge(true)
      setShowLoader(false)
    }
  }
  const selectedBook = arrBooks.filter(book => book.asin === asin)

  const [showPage , setShowPage] = useState(false)
  const testAsin = ()=>{
    arrBooks.map((book, i)=>{
      if (book.asin === asin) {
        setShowPage(true)
      }
    })
  }

  useEffect(() => {
    GetBookReviews(asinParams.asin)
    testAsin()
  }, [])

  const [showTableSmartphone, setShowTableSmartphone] = useState(false)

  const handlerSmartphone = () => {
    setTimeout(() => {
      setShowTableSmartphone(!showTableSmartphone);
    }, 450)
  }

  const caseSmartphone = () => {
    if (feeds.length === 0) {
      return (
        <tr>
          <td className='text-truncate text-bg-danger' >comment not found </td>
        </tr>
      )
    } else {
      return (
        feeds.map((feed, i) => {
          return (
            <OverlayTrigger
              key={i}
              placement='top'
              overlay={
                <Tooltip>
                  {feed.author}
                </Tooltip>
              }
            >
              <tr key={feed._id} data-toggle="tooltip" data-placement="top" title="This is row 3">
                <td className='text-truncate w-100' >{feed.comment}</td>
              </tr>
            </OverlayTrigger>
          )
        })
      )
    }
  }

  const {selectTheme} = useContext(ThemeContext)

  

  return (
    <Container>
      {showPage &&(<Row className='overflow-hidden position-relative'>
        <Col xs={12} md={5} >
          {showLoader && !showData && !showErrorMessage && (<div className='deviceDisplay d-flex justify-content-center align-items-center '><Loader /></div>)}
          {!showLoader && showErrorMessage && !showData && (<div className='deviceDisplay d-flex justify-content-center align-items-center d-md-none'><MyError /></div>)}
          {!showLoader && !showErrorMessage && showData && (
            <>
              <div className='d-flex justify-content-center align-items-center deviceDisplay flex-column pt-4'>
                <h3 className='text-center'>{selectedBook[0].title}</h3>
                <figure className='m-0 w-100 h-100 p-5'>
                  <img src={selectedBook[0].img} alt="img" className='w-100 h-100 rounded-end-4' />
                </figure>
              </div>
              <p className={(selectTheme? ' bg-info  ' : ' bg-black  ') +' bookComment position-absolute text-truncate py-3 ps-4 pe-0 d-flex d-md-none justify-content-center align-items-center m-0 rounded-start-4 text-white fw-bold z-2'} onClick={() => handlerSmartphone()}>
                SeeComment
              </p>
            </>
          )}
          {showTableSmartphone && (
            <Table striped bordered hover className=' d-flex-column d-md-none position-absolute top-50 start-50 translate-middle z-3 justify-content-center align-items-center '>
              <thead>
                <tr>
                  <th className='d-flex justify-content-between align-items-center '>
                    <p className='m-0'>Comment</p>
                    <button className='btn btn-light' onClick={() => handlerSmartphone()}>X</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseSmartphone()}
              </tbody>
            </Table>
          )}
        </Col>
        <Col xs={0} md={7} className='d-none d-md-flex'>
          <div className='w-100 h-100 d-flex justify-content-center align-content-center flex-column deviceDisplay'>
            {showLoader && !showData && !showErrorMessage && (<Loader />)}
            {!showLoader && !showErrorMessage && showData && (
              <Table striped bordered hover className='d-none d-md-block'>
                <thead>
                  <tr>
                    <th></th>
                    <th>User</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {feeds.length != 0 && (
                    feeds.map((feed, i) => {
                      return (
                        <tr key={feed._id}>
                          <td>{i}</td>
                          <td>{feed.author}</td>
                          <td>{feed.comment}</td>
                        </tr>
                      )
                    })
                  )}
                  {feeds.length === 0 && (
                    <tr>
                      <td className='text-bg-danger'>#</td>
                      <td className='text-bg-danger'>try again</td>
                      <td className='text-truncate text-bg-danger' >comment not found</td>
                    </tr>
                  )}
                </tbody>
              </Table>)}
            {!showLoader && showErrorMessage && !showData && (<MyError />)}
          </div>
        </Col>
      </Row>)}
      {!showPage && (<ErrorPages/>)}
    </Container>
  )
}