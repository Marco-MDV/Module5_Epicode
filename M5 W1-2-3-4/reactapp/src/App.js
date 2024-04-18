import MyNav from './components/myNav/MyNav.jsx';
import MyMain from './components/myMain/MyMain.jsx'
import MyFooter from './components/myFooter/MyFooter.jsx';
import booksFantasy from './data/books/fantasy.json'
import booksHistory from './data/books/history.json'
import booksHorror from './data/books/horror.json'
import booksRomance from './data/books/romance.json'
import booksScifi from './data/books/scifi.json'
import { useState } from 'react';

const arrBooks = [...booksFantasy, ...booksHistory, ...booksHorror, ...booksRomance]


function App() {
  const [selectedBook, setSelectedBook] = useState([])

  //console.log(selectedBook);
  const hendleCLick = (e) => {
    setSelectedBook([
      ...selectedBook,
      { title: e.title, img: e.img, price: e.price }
    ])
  }

  const [searchCard, setSearchCard] = useState([])

  /* console.log(searchCard); */
  const hendleSearch = (filteredBooks) => {
    setSearchCard(filteredBooks)
  }

  return (
    <>
      <MyNav
        hendleSearch={hendleSearch}
        arrBooks={arrBooks}
        selectedBook={selectedBook}
      />
      <MyMain
        booksFantasy={booksFantasy}
        booksHistory={booksHistory}
        booksHorror={booksHorror}
        booksRomance={booksRomance}
        booksScifi={booksScifi}
        arrBooks={arrBooks}
        searchCard={searchCard}
        hendleCLick={hendleCLick}
      />
      <MyFooter />
    </>
  );
}

export default App;
