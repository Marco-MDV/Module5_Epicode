import { Col } from 'react-bootstrap'
import cardStyle from '../categoryBooks/card/cardStyle'

export default function CategoryCard({ book, asin, hendleCLick}){
    return (
        <Col key={asin} xs={12} md={3} className={"hidden" + ' ' /* + category */ + ' p-5'}>
            <div className='w-100 h-100 position-relative myCard'>
                <div className='position-absolute top-0 start-50 translate-middle-x containerTitle rounded p-2 mt-3'>
                    <h5 className=' text-center titleBook'>{book.title}</h5>
                </div>
                <figure className='m-0 w-100 h-100'>
                    <img src={book.img} alt={"image " + book.title} className='w-100 h-100 rounded' />
                </figure>
                <div className='w-100 position-absolute bottom-0 d-flex justify-content-around align-items-center mb-2'>
                    <p className=' price p-2 rounded m-0'>{"Price: " + book.price}</p>
                    <button className='price ms-2 p-2 rounded' onClick={()=> hendleCLick(book)}>Add List</button>
                </div>
            </div>
        </Col>
    )
}