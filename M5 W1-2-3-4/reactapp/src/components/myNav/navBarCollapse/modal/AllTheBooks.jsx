
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import myNavStyle from '../../myNavStyle.module.css'

function Example({ selectedBook }) {
  console.log(selectedBook);
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
              <figure className={myNavStyle.figureImgModale}>
                <img src={book.img} alt={book.title} className='w-100 h-100 rounded'/>
              </figure>
              <p>
                {book.title}
              </p>
            </div>
          )
        })
      )
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={myNavStyle.myButton + ' fw-bold rounded text-white '} onClick={handleShow}>
        All The Books
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Selected Books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            modalBooks()
          }
        </Modal.Body>
        <Modal.Footer>
          <div className='w-100 d-flex justify-content-between'>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleClose}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;