import { Col } from 'react-bootstrap'
import cardStyle from './cardStyle.css'
import { useState } from 'react'
import CommentArea from '../../commentArea/CommentArea'
import { useNavigate } from 'react-router-dom'

export default function MyCard({ book, hendleCLick, category, hookAsinVlue, requestInfo, showCard, handleDeselected, setHandleDeselected}) {
    const [selected, setSelected] = useState(false)

    const handleSelected = () => {
        setSelected(!selected)
    }

    const [show, setShow] = useState(false)

    const openFeed = () => {
        setShow(!show)    
    }

    const selectedBook = useNavigate()

    return (
        <>
            <Col key={book.asin} xs={12} md={4} className={ showCard ? ' d-none ':' d-flex '+ category + ' p-5 p-md-3'}>
                <div className={' position-relative w-100 myCard'}>
                    <figure className='m-0 w-100 position-relative'>
                        <img src={book.img} alt={"image " + book.title} className='w-100 h-100' />
                        <div className={(selected ? 'look' : 'opacity-0') + ' position-absolute top-50 start-50 translate-middle rounded-3 border-3'}>
                            <p className='m-0 p-3'>
                                selected
                            </p>
                        </div>
                    </figure>
                    <div className='containerInfo gap-4 p-2 '>
                        <p className=' text-center titleBook m-0 w-100 text-truncate'>{book.title}</p>
                        <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                            <p className=' price rounded m-0 w-100 '>{"Price: " + book.price}</p>
                            <div className='d-flex w-100 justify-content-between align-content-center gap-2'>
                                <button className='rounded ' onClick={()=>selectedBook(`/BookReviews/${book.asin}`)}>All Info</button>
                                {!selected && (<button className='price  p-2 rounded m-0 w-50 ' onClick={() => {handleSelected(); hendleCLick(book)}}>select</button>)}
                                {selected && (<button className='price  p-2 rounded m-0 w-50 ' onClick={() => {handleSelected(); hendleCLick(book)}}>Deselect</button>)}
                                <button className='price  p-2 rounded m-0 w-50 d-flex d-lg-none' onClick={() => openFeed()}>open feedback</button>
                                <button className='rounded d-none d-lg-flex' onClick={()=>{hookAsinVlue(String(book.asin)); requestInfo(book.asin)}}>Comment</button>
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