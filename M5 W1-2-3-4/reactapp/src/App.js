import MyNav from './components/myNav/MyNav.jsx';
import MyMain from './components/myMain/MyMain.jsx'
import MyFooter from './components/myFooter/MyFooter.jsx';
import booksFantasy from './data/books/fantasy.json'
import booksHistory from './data/books/history.json'
import booksHorror from './data/books/horror.json'
import booksRomance from './data/books/romance.json'
import booksScifi from './data/books/scifi.json'
import { useState } from 'react';
import { ThemeProvider } from './components/themeContext/ThemeContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookReviews from './components/otherPages/bookReviews/BookReviews.jsx'
import ErrorPages from './components/otherPages/errorPages/ErrorPages.jsx'

const arrBooksForCategory = [booksFantasy, booksHistory, booksHorror, booksRomance, booksScifi]
const arrBooks = [...booksFantasy, ...booksHistory, ...booksHorror, ...booksRomance, ...booksScifi]


function App() {
  const [selectedBook, setSelectedBook] = useState([])
  const hendleCLick = (book) => {
    if (!selectedBook.some(selectedBook => selectedBook.asin === book.asin)) {
      setSelectedBook([...selectedBook, book]);
    }
  }
  const [handleDeselected, setHandleDeselected] = useState([])

  const removeBook = (removedBook) => {
    setSelectedBook(selectedBook.filter(book => book !== removedBook))
  }

  const [searchCard, setSearchCard] = useState([])

  const hendleSearch = (filteredBooks) => {
    setSearchCard(filteredBooks)
  }

 

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <MyNav
            hendleSearch={hendleSearch}
            arrBooks={arrBooks}
            selectedBook={selectedBook}
            removeBook={removeBook}
            handleDeselected={handleDeselected}
            setHandleDeselected={setHandleDeselected}
          />
          <Routes>

            <Route index element={
              <MyMain
                arrBooksForCategory={arrBooksForCategory}
                arrBooks={arrBooks}
                searchCard={searchCard}
                hendleCLick={hendleCLick}
                handleDeselected={handleDeselected}
                setHandleDeselected={setHandleDeselected}
              />
            } />
            <Route path="/BookReviews/:asin"  element={<BookReviews arrBooks={arrBooks}/> } />
            <Route path="*" element={<ErrorPages />} />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
