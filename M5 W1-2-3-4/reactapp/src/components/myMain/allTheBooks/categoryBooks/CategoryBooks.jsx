import { Col } from 'react-bootstrap'
import mainStyle from '../../mainStyle.module.css'
import MyCard from './card/Card';


export default function CategoryBooks(props) {
    const removeHidden = ()=>{
        const elements = document.querySelectorAll('.'+props.category);
        const arrayElements = Array.from(elements);
        arrayElements.forEach(element =>{
            element.classList.remove('d-none')
        })
    }
    return (
        <>
            <Col xs={12}>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <h4 className={mainStyle.categoryBook + ' m-0 fw-bold'}>{props.title}</h4>
                    <button onClick={removeHidden} className={mainStyle.AllBooks + ' p-2 rounded fw-bold' }><p className='m-0'>View All Books</p></button>
                </div>
            </Col>
            {props.books.map((book, index) => {
                if (index < 4) {
                    return (
                        <MyCard
                            category = {props.category}
                            book={book}
                            key={index}
                        />
                    )
                } else if (index > 4) {
                    return (
                        <MyCard
                            category = {props.category}
                            book={book}
                            key={index}
                            hidden='d-none'
                        />
                    )
                }
            })}
        </>
    );
}
