import { Col } from 'react-bootstrap'
import { useState } from 'react'
import mainStyle from '../../mainStyle.module.css'
import MyCard from './card/Card';


export default function CategoryBooks({category, title, books, hendleCLick}) {
    const [show, setShow] = useState(false)
    const modShow =() =>{setShow(!show)}

    return (
        <>
            <Col xs={12}>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <h4 className={mainStyle.categoryBook + ' m-0 fw-bold'}>{title}</h4>
                    <button onClick={()=>modShow()} className={mainStyle.AllBooks + ' p-2 rounded fw-bold' }><p className='m-0'>View All Books</p></button>
                </div>
            </Col>
            
            {books.map((book, index) => {
                        if (index < 4) {
                            return (
                                <MyCard
                                    category = {category}
                                    book={book}
                                    key={index}
                                    hendleCLick={hendleCLick}
                                />
                            )
                        } else if (index > 4) {
                            return (
                                show && (
                                  <MyCard
                                    category={category}
                                    book={book}
                                    key={index}
                                    hendleCLick={hendleCLick}
                                  />
                                )
                              );
                        }
                    })
            }
        </>
    );
}