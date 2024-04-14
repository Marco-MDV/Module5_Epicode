import { Col } from 'react-bootstrap'
import cardStyle from './cardStyle.css'

export default function MyCard({ book, index, hidden, category }) {
    return (
        <Col key={index} xs={12} md={3} className={hidden + ' ' + category + ' p-5'}>
            <div className='w-100 h-100 position-relative myCard'>
                <div className='position-absolute top-0 start-50 translate-middle-x containerTitle rounded p-2 mt-3'>
                    <h5 className=' text-center titleBook'>{book.title}</h5>
                </div>
                <figure className='m-0 w-100 h-100'>
                    <img src={book.img} alt={"image " + book.title} className='w-100 h-100' />
                </figure>
                <p className='position-absolute bottom-0 end-0 price me-2 p-2 rounded'>{"price" + book.price}</p>
            </div>
        </Col>
    )
}