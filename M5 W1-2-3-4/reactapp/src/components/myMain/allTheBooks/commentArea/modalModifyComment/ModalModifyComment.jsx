import { Form, Table } from 'react-bootstrap/';
import styleFeed from '../styleFeed.module.css'
import { useState } from 'react';
export default function ModalModifyComponent({ bookFeed, endPoint, setError, setFeed, feed, hookModalModify, setShow, show }) {

    /* input */
    const [newComment, setNewComment] = useState('')

    const hookComment = (e) => {
        setNewComment(e.target.value)
    }

    /* rate */
    const [newRate, setNewRate] = useState(0)

    const hookRate = (value) => {
        setNewRate(Number(value.target.value))
    }

    const modifyComment = async () => {

        try {
            const myPut = await fetch(`${endPoint}${bookFeed._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                },
                body: JSON.stringify({
                    comment: newComment,
                    rate: newRate,
                    _id: bookFeed._id
                })
            })
            const myPutRequest = myPut.json()
            if (myPut.ok) {
                setShow(!show)
            } else {
                setError(true)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return (
        <div className={styleFeed.bgModify + ' w-100 h-100 position-absolute top-50 start-50 translate-middle z-2 rounded '}>
            <div className="position-fixed top-50 start-50 translate-middle z-2 rounded">
                <Table responsive="sm">
                    <thead>
                        <tr className='text-ceneter'>
                            <th></th>
                            <th>Comment</th>
                            <th>Rate</th>
                            <th className='d-flex align-content-center justify-content-center '><button onClick={hookModalModify} className={styleFeed.buttonMod + ' rounded'}>X</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ex:</td>
                            <td><p className='m-0 text-truncate'>{bookFeed.comment}</p></td>
                            <td>{bookFeed.rate}</td>
                            <td></td>
                        </tr>
                        <tr className='text-center'>
                            <td>New:</td>
                            <td><input type="text" onChange={hookComment} /></td>
                            <td>
                                <Form.Select aria-label="Default select example" onChange={hookRate} className={styleFeed.selectRate}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                </Form.Select>
                            </td>
                            <td>
                                <button onClick={() => { modifyComment() }} className={styleFeed.buttonMod + ' rounded'}>
                                    send
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}