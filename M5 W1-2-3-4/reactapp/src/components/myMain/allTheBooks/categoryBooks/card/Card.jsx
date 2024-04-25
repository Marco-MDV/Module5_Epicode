import { Col } from 'react-bootstrap'
import cardStyle from './cardStyle.css'
import { useEffect, useState } from 'react'
import CommentArea from '../../commentArea/CommentArea'

export default function MyCard({ book, index, hidden, hendleCLick, category }) {
    const [selected, setSelected] = useState(false)

    const handleSelected = () => {
        setSelected(!selected)
    }

    

    /* devo passare handleSelected come props */


    const [show, setShow] = useState(false)

    const openFeed = () => {
        setShow(!show)    
    }

    return (
        <>
            <Col key={index} xs={12} md={3} className={hidden + ' ' + category + ' p-5 p-md-3'}>
                <div className={'position-relative w-100 myCard'}>
                    <figure className='m-0 w-100 position-relative'>
                        <img src={book.img} alt={"image " + book.title} className='w-100 h-100' />
                        <div className={(selected ? 'look' : 'opacity-0') + ' position-absolute top-50 start-50 translate-middle rounded-3 border-3'}>
                            <p className='m-0 p-3'>
                                selected
                            </p>
                        </div>
                    </figure>
                    <div className='containerInfo gap-4 p-2 flex-wrap '>
                        <p className=' text-center titleBook m-0'>{book.title}</p>
                        <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                            <p className=' price rounded m-0'>{"Price: " + book.price}</p>
                            <div className='d-flex '>
                                <button className='price ms-2 p-2 rounded m-0 w-50 ' onClick={() => openFeed()}>open feedback</button>
                                <button className='price ms-2 p-2 rounded m-0 w-50 ' onClick={() => {handleSelected();hendleCLick(book)}}>Add List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            {show &&(
                <CommentArea
                    bookTitle={book.title}
                    openFeed={openFeed}
                    asin={book.asin}
                    setShow={setShow}
                    show={show}
                />
            )}
        </>
    )
}