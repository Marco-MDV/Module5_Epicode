import styleFeed from './styleFeed.module.css'
import { useEffect, useState } from 'react';
import Loader from '../../../loader/Loader'
import MyError from '../../../myError/MyError';
import FormComponent from './form/FormComponent'
import TableComponent from './table/TableComponent';

const endPoint = 'https://striveschool-api.herokuapp.com/api/comments/'

export default function CommentArea({ bookTitle, openFeed, asin, setShow , show}) {

    const [feed, setFeed] = useState([])
    const [see, setSee] = useState(true)
    const [error, setError] = useState(false)

    const requestInfo = async (value) => {
        try {
            const respons = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI0MjE1NGFmYTQ4NjAwMWFjZTEyMDEiLCJpYXQiOjE3MTM2NDM4NjAsImV4cCI6MTcxNDg1MzQ2MH0.Kcliqi-JyGtB4uBwvl6cuXskhf4iICwA5DMJMy1Ylsc',
                    'Content-Type': 'application/json'
                }
            })
            const feedJson = await respons.json()
            if (respons.ok) {
                setFeed(feedJson)
                setSee(!see)
            } else {
                console.log(error);
                setError(!error)
            }
        } catch (error) {
            console.log(error);
            setError(!error)
        }
    }

    useEffect(() => {
        requestInfo()
    }, [])

    const [inputValue, setInputValue] = useState('')

    const hookInputValue = (value) => {
        setInputValue(String(value.target.value))
    }

    const [rate, setRate] = useState(0)

    const hookRate = (value) => {
        setRate(Number(value.target.value))
    }


    const sendComment = async () => {

        if (rate != 0 && inputValue != '') {
            try {
                const respons = await fetch(endPoint, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                    },
                    body: JSON.stringify({
                        'comment': inputValue,
                        'rate': rate,
                        'elementId': asin
                    })
                })
                const feedJson = await respons.json()
                if (respons.ok) {
                    setFeed([
                        ...feed,
                        feedJson
                    ])
                } else {
                    console.log(error);
                    setError(true)
                }
            } catch (error) {
                console.log(error);
                setError(true)
            }
        } else {
            console.log('compila tutti i  campi');
        }
    }

    const [modalModify, setModalModify] = useState(false)
    const hookModalModify = () => {
        setModalModify(!modalModify)
    }


    const deleteComment = async (value) => {
        try {
            const myDelete = await fetch(`${endPoint}${value}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                }
            })
            if (myDelete.ok) {
                setFeed(
                    feed.filter(comment => comment._id !== value)
                )
            } else {
                console.log(error);
                setError(true)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }


    const [bookFeed, setBookFeed] = useState({})

    const hookBookFeed = (value) =>{
        setBookFeed(value)
    } 

    return (
        <div className={styleFeed.bgFeed + ' position-fixed top-50 start-50 w-100 h-100 translate-middle z-2'}>
            <div className={styleFeed.containerFeedback + ' position-fixed top-50 start-50 translate-middle'}>
                <div className={'position-relative  bg-white p-3 rounded'}>
                    <button onClick={openFeed} className={styleFeed.buttonClose + ' position-absolute me-1 mt-1 top-0 end-0'}>X</button>
                    <div>
                        <h3>{bookTitle}</h3>
                        <div className={styleFeed.feed + ' border rounded p-2'}>
                            {error && (
                                <MyError />
                            )}
                            {see && !error && (
                                <Loader />
                            )}
                            {!see && !error && (
                                <>
                                <TableComponent
                                    setError={setError}
                                    bookFeed={bookFeed}
                                    endPoint={endPoint}
                                    setFeed={setFeed}
                                    feed={feed}
                                    hookModalModify={hookModalModify}
                                    modalModify={modalModify}
                                    setShow={setShow}
                                    show={show}
                                    hookBookFeed={hookBookFeed}
                                    deleteComment={deleteComment}
                                />
                            </>
                            )}
                        </div>
                    </div>
                    <FormComponent
                        hookRate={hookRate}
                        hookInputValue={hookInputValue}
                        sendComment={sendComment}
                    />
                    </div>
                    </div>
                    </div>
                )
}