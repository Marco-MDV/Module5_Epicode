import { Row, Col } from 'react-bootstrap'
import CategoryBooks from './categoryBooks/CategoryBooks'
import CategoryBooksSearch from './categoryBooksSearch/CategoryBooksSearch'
import CommentArea2 from '../commentArea2/CommentArea2'
import { useContext, useState } from 'react'
import AddComment2 from '../commentArea2/AddComment2'
import { ThemeContext } from '../../themeContext/ThemeContext'

export default function AllTheBooks({ arrBooksForCategory, arrBooks, searchCard, hendleCLick, handleDeselected, setHandleDeselected }) {
    const endPoint = 'https://striveschool-api.herokuapp.com/api/comments/'
    const {selectTheme} = useContext(ThemeContext)

    const [show, setShow] = useState(false)

    const [comment, setComment] = useState([])
    const hookComment = (value) => { setComment(value) }

    const [asinVlue, setAsinVlue] = useState('')
    const hookAsinVlue = (asin) => { setAsinVlue(asin); setShow(true) }

    const [showLoader, setShowLoader] = useState(true)

    const [showErrorMessage, setShowErrorMessge] = useState(true)
    
    const requestInfo = async (asin) => {
        setShowLoader(true)
        setShowErrorMessge(false)
        try {
            const respons = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI0MjE1NGFmYTQ4NjAwMWFjZTEyMDEiLCJpYXQiOjE3MTM2NDM4NjAsImV4cCI6MTcxNDg1MzQ2MH0.Kcliqi-JyGtB4uBwvl6cuXskhf4iICwA5DMJMy1Ylsc',
                    'Content-Type': 'application/json'
                }
            })
            const feedJson = await respons.json()
            if (respons.ok) {
                hookComment(feedJson)
                setShowErrorMessge(false)
                setShowLoader(false)
            } else {
                console.log('error');
            }
        } catch (error) {
            setShowLoader(false)
            setShowErrorMessge(true)
            console.log(error);
        }
    }


    return (
        <>
            <Row>
                <Col xs={12} md={12} lg={8}>
                    <Row className='py-3'>
                        <CategoryBooksSearch
                            title='search'
                            searchCard={searchCard}
                            category='search'
                            hendleCLick={hendleCLick}
                            arrBooks={arrBooks}
                            hookAsinVlue={hookAsinVlue}
                        />
                    </Row>

                    {
                        arrBooksForCategory.map((category, index) => {
                            return (
                                <Row key={index} className='py-3'>
                                    <CategoryBooks
                                        title={arrBooksForCategory[index][0].category}
                                        books={category}
                                        hendleCLick={hendleCLick}
                                        hookAsinVlue={hookAsinVlue}
                                        requestInfo={requestInfo}
                                        handleDeselected={handleDeselected}
                                        setHandleDeselected={setHandleDeselected}
                                    />
                                </Row>
                            )
                        })
                    }
                </Col>
                <Col sm={12} lg={4} className='pt-5 pb-4'>
                    <div className={(selectTheme?' bg-info-subtle text-dark ':' bg-dark text-white') +' w-100 h-100 rounded-4 justify-content-center align-items-start d-none d-lg-flex'}>
                        <div className='d-flex justify-content-center align-items-center flex-column px-4 w-100 position-sticky top-0 '>
                            <h3 className='py-5'>Comment Area</h3>
                            {!show && (<p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sint facilis natus quod maxime eaque eum commodi inventore voluptatem illo?</p>)}
                            {show && (
                                <>
                                    <CommentArea2
                                        comment={comment}
                                        endPoint={endPoint}
                                        setComment={setComment}
                                        showLoader={showLoader}
                                        showErrorMessage={showErrorMessage}
                                    />
                                    <AddComment2
                                        asin={asinVlue} 
                                        endPoint={endPoint}
                                        comment={comment}
                                        setComment={setComment}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}