import { Col } from 'react-bootstrap'
import cardStyle from './cardStyle.css'
import { useState } from 'react'

export default function MyCard({ book, index, hidden, hendleCLick,category}) {

    /* console.log(book); */
    const [selected , setSelected]=useState(false)

    //console.log(selected);

    const handleSelected = (e) => {
        hendleCLick(e)
        if (selected == false) {
            setSelected (
                true
            )
        }else(
            setSelected (
                false
            )
        )
    }

    return (
        <Col key={index} xs={12} md={3} className={hidden + ' ' + category + ' p-5'}>
            <div className={'position-relative w-100 myCard'}>
                <figure className='m-0 w-100 position-relative'>
                    <img src={book.img} alt={"image " + book.title} className='w-100 h-100' />
                    <div className={(selected ? 'look' : 'opacity-0') + ' position-absolute top-50 start-50 translate-middle rounded-3 border-3'}>
                    <p className='m-0 p-3'>
                        selected
                    </p>
                </div>
                </figure>
                <div className='containerInfo gap-4 p-2'>
                    <p className=' text-center titleBook m-0'>{book.title}</p>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <p className=' price rounded m-0'>{"Price: " + book.price}</p>
                        <button className='price ms-2 p-2 rounded m-0 ' onClick={()=> handleSelected(book)}>Add List</button>
                    </div>
                </div>
            </div>
        </Col>
    )
}