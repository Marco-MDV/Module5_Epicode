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

const arrBooksForCategory = [booksFantasy, booksHistory, booksHorror, booksRomance, booksScifi]
const arrBooks = [...booksFantasy, ...booksHistory, ...booksHorror, ...booksRomance, ...booksScifi]


function App() {
  const [selectedBook, setSelectedBook] = useState([])
  const hendleCLick = (book) => {
    if (selectedBook.length != 0) {
      selectedBook.map(selectedSingleBook => {
        if (selectedSingleBook === book) {
        }
      })
    }else{
      setSelectedBook([
        ...selectedBook,
        book
      ])
    }
  }
    
  /* questo elimina il libro */
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
        <MyNav
          hendleSearch={hendleSearch}
          arrBooks={arrBooks}
          selectedBook={selectedBook}
          removeBook={removeBook}
        />
        <MyMain
          arrBooksForCategory={arrBooksForCategory}
          arrBooks={arrBooks}
          searchCard={searchCard}
          hendleCLick={hendleCLick}
        />
        <MyFooter />
      </ThemeProvider>
    </>
  );
}

export default App;
