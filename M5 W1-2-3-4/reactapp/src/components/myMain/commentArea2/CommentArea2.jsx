import React, { useState } from 'react';
import Loader from '../../loader/Loader';
import MyError from '../../myError/MyError';

export default function CommentArea2({ comment, showLoader, endPoint, setComment, showErrorMessage }) {
    const [input, setInput] = useState('');
    const [rate, setRate] = useState(0);
    const [visibleComment, setVisibleComment] = useState(null);
    const handleDeleteComment = async (commentId) => {
        try {
            const response = await fetch(`${endPoint}${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                }
            });
            if (response.ok) {
                setComment(comment.filter(item => item._id !== commentId));
            } else {
                console.log('Error deleting comment');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUpdateComment = async (commentToUpdate) => {
        try {
            const response = await fetch(`${endPoint}${commentToUpdate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                },
                body: JSON.stringify({
                    comment: input,
                    rate: rate,
                    _id: commentToUpdate._id
                })
            });

            if (response.ok) {
                setComment(comment.map(item => {
                    if (item._id === commentToUpdate._id) {
                        return { ...item, comment: input, rate: rate };
                    }
                    return item;
                }));

                setInput('');
                setRate(0);
                setVisibleComment(null);
            } else {
                console.log('Error updating comment');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleShowModificationForm = (commentId) => {
        if (visibleComment === commentId) {
            setVisibleComment(null);
        } else {
            setVisibleComment(commentId);
        }
    };


    return (
        <div className="text-start w-100">
            <p>This is the list:</p>
            <ol className="d-flex align-content-center flex-column">
                {showLoader && <Loader/>}
                {showErrorMessage && <MyError/>}
                {comment.map(singleComment => (
                        <li key={singleComment._id} className='mt-2 border-bottom p-1'>
                            <div className='d-flex justify-content-between'>
                                <div className="text-truncate">{singleComment.comment}</div>
                                <div className="d-flex gap-2">
                                    <span>{singleComment.rate}</span>
                                    <button className='btn-light rounded  border-0 ' onClick={() => handleShowModificationForm(singleComment._id)}>Mod</button>
                                    <button className='btn-light rounded border-0 ' onClick={() => handleDeleteComment(singleComment._id)}>Del</button>
                                </div>
                            </div>
                            {visibleComment === singleComment._id && (
                                <div className="w-100">
                                    <div className="w-100 d-flex justify-content-center align-content-center gap-1 mb-3">
                                        <div className="w-75 d-flex justify-content-center align-content-center">
                                            <input
                                                type="text"
                                                className="w-75 rounded-start border-0"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            />
                                            <button
                                                className="w-25 rounded-end border-0 btn-light"
                                                onClick={() => handleUpdateComment(singleComment)}
                                            >
                                                Send
                                            </button>
                                        </div>
                                        <select
                                            className="form-control w-25"
                                            value={rate}
                                            onChange={(e) => setRate(parseInt(e.target.value))}
                                        >
                                            <option value={0}>Select rate</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
            </ol>
        </div>
    );
}



/* 
return(
                comment.map(singleComment => (
                    <li key={singleComment._id} className='mt-2 border-bottom p-1'>
                        <div className='d-flex justify-content-between'>
                            <div className="text-truncate">{singleComment.comment}</div>
                            <div className="d-flex gap-2">
                                <span>{singleComment.rate}</span>
                                <button className='btn-light rounded  border-0 ' onClick={() => handleShowModificationForm(singleComment._id)}>Mod</button>
                                <button className='btn-light rounded border-0 ' onClick={() => handleDeleteComment(singleComment._id)}>Del</button>
                            </div>
                        </div>
                        {visibleComment === singleComment._id && (
                            <div className="w-100">
                                <div className="w-100 d-flex justify-content-center align-content-center gap-1 mb-3">
                                    <div className="w-75 d-flex justify-content-center align-content-center">
                                        <input
                                            type="text"
                                            className="w-75 rounded-start border-0"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                        />
                                        <button
                                            className="w-25 rounded-end border-0 btn-light"
                                            onClick={() => handleUpdateComment(singleComment)}
                                        >
                                            Send
                                        </button>
                                    </div>
                                    <select
                                        className="form-control w-25"
                                        value={rate}
                                        onChange={(e) => setRate(parseInt(e.target.value))}
                                    >
                                        <option value={0}>Select rate</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </li>
                ))
            )
*/