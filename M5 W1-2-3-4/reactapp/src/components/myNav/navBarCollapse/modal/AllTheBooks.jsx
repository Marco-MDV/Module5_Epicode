import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import myNavStyle from '../../myNavStyle.module.css';
import { ThemeContext } from '../../../themeContext/ThemeContext';


function Example({ selectedBook, removeBook }) {
  const modalBooks = () => {
    if (selectedBook.length === 0) {
      return (
        <p>please select a book</p>
      )
    } else {
      return (
        selectedBook.map(book => {
          return (
            <div className='d-flex w-100 justify-content-between align-items-center gap-3'>
              <div className='w-75 d-flex justify-content-center align-items-center gap-4'>
                <figure className={myNavStyle.figureImgModale}>
                  <img src={book.img} alt={book.title} className='w-100 h-100 rounded' />
                </figure>
                <p className='text-truncate'>
                  {book.title}
                </p>
              </div>
              <button onClick={()=>removeBook(book)}>X</button>
            </div>
          )
        })
      )
    }
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { selectTheme } = useContext(ThemeContext)

  return (
    <>
      <button className={myNavStyle.myButton + ' fw-bold rounded text-white '} onClick={handleShow}>
        All The Books
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className={selectTheme ? null : ' bg-dark text-white '}>
          <Modal.Title>Selected Books</Modal.Title>
        </Modal.Header>
        <Modal.Body className={selectTheme ? null : ' bg-dark text-white '}>
          {
            modalBooks()
          }
        </Modal.Body>
        <Modal.Footer className={selectTheme ? null : ' bg-dark text-white '}>
          <div className={'w-100 d-flex justify-content-between '}>
            <butto onClick={handleClose} className={myNavStyle.myButton + ' fw-bold rounded px-2 py-3 ' + (selectTheme ? ('text-black ' + myNavStyle.blackBord) : ' text-white')}>Close</butto>
            <butto onClick={handleClose} className={myNavStyle.myButton + ' fw-bold rounded px-2 py-3 ' + (selectTheme ? ('text-black ' + myNavStyle.blackBord) : ' text-white')}>Save Changes</butto>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;