import { Form, Table } from 'react-bootstrap/';
import styleFeed from './styleFeed.module.css'
import { useEffect, useState } from 'react';
import Loader from '../../../loader/Loader'
import MyError from '../../../myError/MyError';
import ModalModifyComponent from './modalModifyComment/ModalModifyComment';

const endPoint = 'https://striveschool-api.herokuapp.com/api/comments/'

export default function CommentArea({ bookTitle, openFeed, asin, setShow , show}) {
    /* console.log(hendleComment); ok */

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

    /* console.log(inputValue); */
    const hookInputValue = (value) => {
        setInputValue(String(value.target.value))
    }

    /* rate */
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
                /* console.log(feedJson); */
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

    /* per vedere il modal che ci permette di fare la modifica */
    const [modalModify, setModalModify] = useState(false)
    /* console.log(modalModify); */
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
        <div className={styleFeed.bgFeed + ' position-fixed top-50 start-50 w-100 h-100 translate-middle z-2 '}>
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
                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Comment</th>
                                            <th>Rate</th>
                                            <th>Modify</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {feed.map((singleFeed, index) => {
                                            { index++ }
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{index}</td>
                                                        <td><p className='m-0 text-truncate'>{singleFeed.comment}</p></td>
                                                        <td>{singleFeed.rate}</td>
                                                        <td><button onClick={() => {hookModalModify(); hookBookFeed(singleFeed)}} className={styleFeed.buttonMod + ' rounded '}>Modify</button></td>
                                                        <td><button onClick={() => deleteComment(singleFeed._id)} className={styleFeed.buttonMod + ' rounded '}>Delete</button></td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                        {modalModify &&
                                            <ModalModifyComponent
                                                setError={setError}
                                                bookFeed={bookFeed}
                                                endPoint={endPoint}
                                                setFeed={setFeed}
                                                feed={feed}
                                                hookModalModify={hookModalModify}
                                                setShow={setShow}
                                                show={show}
                                            />
                                        }
                                    </tbody>
                                </Table>
                            )}
                        </div>
                    </div>
                    <div className={' mt-2 d-flex flex-row justify-content-between  align-content-center gap-md-1'}>
                        <Form.Select aria-label="Default select example" onChange={hookRate} className={styleFeed.selectRate}>
                            <option value='0'>select rate</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </Form.Select>
                        <div className='d-flex justify-content-center align-content-center w-100'>
                            <input type="text" placeholder='insert your feed' className={styleFeed.inputFeed + ' w-100 rounded-start'} onChange={hookInputValue} />
                            <button onClick={sendComment} className={styleFeed.sendFeed + ' rounded-end'}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}