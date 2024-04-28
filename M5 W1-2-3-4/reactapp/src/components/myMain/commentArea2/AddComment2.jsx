import React, { useState } from 'react'

export default function AddComment2({endPoint, asin, comment, setComment}) {
    const [input , setInput] = useState('')
    const handleInput = (e) =>{
        setInput(e.target.value)
    }


    const [rate, setRate] = useState(0)
    const handleRate = (e) =>{
        setRate(Number(e.target.value))
    }


    const sendComment = async () => {

        if (rate != 0 && input != '') {
            try {
                const respons = await fetch(endPoint, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIyMmQ4YjQwZWNjZTAwMTlhNWI5ZjEiLCJpYXQiOjE3MTM1MTU5MTUsImV4cCI6MTcxNDcyNTUxNX0.MxRaxEkR-IWmNCBh1seyFUC9GawIsj8uYbkqqUV-Lec'
                    },
                    body: JSON.stringify({
                        'comment': input,
                        'rate': rate,
                        'elementId': asin
                    })
                })
                const feedJson = await respons.json()
                if (respons.ok) {
                    setComment([
                        ...comment,
                        feedJson
                    ])
                } else {
                    console.log('error');

                }
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('compila tutti i  campi');
        }
    }

    return (
        <>
        <h6 className='text-start w-100 mt-3'>Add Comment:</h6>
        <div className='w-100 d-flex justify-content-center align-content-center gap-1'>
            <div className='w-75 d-flex justify-content-center align-content-center'>
                <input type="text" className='w-75 rounded-start border-0 'onChange={handleInput}/>
                <button className='w-25 rounded-end border-0 btn-light' onClick={()=>sendComment()}>Send</button>
            </div>
            <select class="form-control w-25" onChange={handleRate}>
                <option value={0}>Select rate</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        </>
    )
}
