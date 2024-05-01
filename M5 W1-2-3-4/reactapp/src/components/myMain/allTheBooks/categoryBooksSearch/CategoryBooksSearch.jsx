import { Col } from 'react-bootstrap'
import mainStyle from '../../mainStyle.module.css'
import MyCard from '../categoryBooks/card/Card.jsx';

export default function CategoryBooksSearch({searchCard, category, hendleCLick, title, handleShow, hookAsinVlue}) {
    const check = () =>{
        if (searchCard.length === 0) {
            return(
                <h4 className={mainStyle.categoryBook + ' m-0 fw-bold d-none'}>{title}</h4>
            )
        } else {
            return(
                <h4 className={mainStyle.categoryBook + ' m-0 fw-bold d-flex'}>{title}</h4>
            )
        }
    }
    return (
        <>
            <Col xs={12}>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    {check()}
                </div>
            </Col>
            {searchCard.map((book, index) => {
                return(
                    <MyCard
                    category={category}
                    book={book}
                    hendleCLick={hendleCLick}
                    key={book.asin}
                    handleShow={handleShow}
                    hookAsinVlue={hookAsinVlue}
                />
                )
            })}
        </>
    )


}