import { Form } from 'react-bootstrap/';

import React from 'react'
import styleFeed from '../styleFeed.module.css'

export default function FormComponent({hookRate, hookInputValue,sendComment}) {
    return (
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
    )
}
