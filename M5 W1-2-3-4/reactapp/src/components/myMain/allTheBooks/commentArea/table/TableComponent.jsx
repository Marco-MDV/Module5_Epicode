import React from 'react'
import { Table } from 'react-bootstrap/';
import styleFeed from '../styleFeed.module.css'
import ModalModifyComponent from '../modalModifyComment/ModalModifyComment';

export default function TableComponent({ setError, bookFeed, endPoint, setFeed, feed, hookModalModify, setShow, show, hookBookFeed, deleteComment, modalModify }) {
    const comment =()=>{
        if (feed.length != 0) {
            return(
                feed.map((singleFeed, index) => {
                    { index++ }
                    return (
                        <>
                            <tr>
                                <td>{index}</td>
                                <td><p className='m-0 text-truncate'>{singleFeed.comment}</p></td>
                                <td>{singleFeed.rate}</td>
                                <td><button onClick={() => { hookModalModify(); hookBookFeed(singleFeed) }} className={styleFeed.buttonMod + ' rounded '}>Modify</button></td>
                                <td><button onClick={() => deleteComment(singleFeed._id)} className={styleFeed.buttonMod + ' rounded '}>Delete</button></td>
                            </tr>
                        </>
                    )
                })
            )
        }else{
            return(
                <tr>
                    <td></td>
                    <td>The comments is absent</td>
                    <td>if you want add a comment</td>
                    <td></td>    
                    <td></td>
                </tr>
            )
        }
    }

    return (
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
                {comment()}
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
                    />}
            </tbody>
        </Table>
    )
}
