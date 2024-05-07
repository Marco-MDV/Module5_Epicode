import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Welcome from './components/myMain/welcome/Welcome';
import '@testing-library/jest-dom'
import { ThemeProvider } from './components/themeContext/ThemeContext';
import MyCard from './components/myMain/allTheBooks/categoryBooks/card/Card';
import { BrowserRouter } from 'react-router-dom'
import CommentArea2 from './components/myMain/commentArea2/CommentArea2';
import AllTheBooks from './components/myMain/allTheBooks/AllTheBooks';
import App from './App';
import CategoryBooks from './components/myMain/allTheBooks/categoryBooks/CategoryBooks';
const bookFake = {
  asin: "0316438960",
  title: "The Last Wish: Introducing the Witcher",
  img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
  price: 9.59,
  category: "fantasy"
}
const comment= [
  {
    author:"stefano.moioli10@gmail.com",
    comment:'Prova',
    createdAt:'2024-05-03T12:30:56.683Z',
    elementId:'0786966246',
    rate:5,
    _id:'6634d9003b2d1c00152e8327'
  },
  {
    author:"stefano.moioli10@gmail.com",
    comment:'Prova',
    createdAt:'2024-05-03T12:30:56.683Z',
    elementId:'0786966246',
    rate:5,
    _id:'6634d9003b2d1c00152e8327'
  }
]
const arrBooks = [
  {
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy"
  },
  {
    "asin": "0316389706",
    "title": "Sword of Destiny (The Witcher)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    "price": 10.39,
    "category": "fantasy"
  },
]
const arrBooksForCategory = [
  [{
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy"
  },
  {
    "asin": "0316389706",
    "title": "Sword of Destiny (The Witcher)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    "price": 10.39,
    "category": "fantasy"
  }],
  [{
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy"
  },
  {
    "asin": "0316389706",
    "title": "Sword of Destiny (The Witcher)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg",
    "price": 10.39,
    "category": "fantasy"
  }]
]

/* 1 */
it('check main', () => {
  render(<ThemeProvider><Welcome /></ThemeProvider>);
  const textTitle = screen.getByTestId('Welcome');
  expect(textTitle).toBeVisible();
})

/* 2 */
it('check numbers cards', () => {
  render(<App/>)
  const cards = screen.getAllByTestId('idCard')
  expect(cards).toHaveLength(686)
})

/* 3 */
it('check CommentArea', () => {
  render(<CommentArea2 comment={comment}/>)
  const CommentArea= screen.getByTestId('CommentArea')
  expect(CommentArea).toBeVisible();
})

/* 4 */
it('search camp',()=>{
  render(
    <App/>
  );
  const input = screen.getByPlaceholderText('Search your book...')
  fireEvent.change(input, {target: {value:'Wish'}})
  const search = screen.getByTestId('searchCardButton')
  fireEvent.click(search)
  const allTheBooks = screen.getAllByTestId('searchCard')
  expect(allTheBooks).toHaveLength(2)
})

/* 5 */
/* non ho fatto il bordo ma un bollino con scritto selected*/
it('Checking Bookmarks', () => {
  render(<BrowserRouter><MyCard book={bookFake}/></BrowserRouter>)
  const checkCard = screen.getByText('Select')
  fireEvent.click(checkCard)
  const checkSelected = screen.getByText('Selected')
  expect(checkSelected).toBeVisible();
})

/* 6 */
/* per deselezionare il libro ho implemetato una logica a bottone per deselezionare il libro */
it('Check Deselected', ()=>{
  render(<BrowserRouter><MyCard book={bookFake}/></BrowserRouter>)

  const checkCard = screen.getByText('Select')
  fireEvent.click(checkCard)

  const checkSelected = screen.getByText('Selected')
  expect(checkSelected).toBeVisible();

  const deselectedCard = screen.getByText('Deselect');
  fireEvent.click(deselectedCard)
  
  expect(checkSelected).not.toBeVisible();
})

/* 7 */
it('Check if there are no comments', ()=>{
  render(
    <ThemeProvider>
      <BrowserRouter>
        <AllTheBooks
          arrBooks={arrBooks}
          arrBooksForCategory={arrBooksForCategory}
          searchCard={[]}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
  const defaultText = screen.getByTestId('defaulText')
  expect(defaultText).toBeVisible();
})

/* 8 */
it('checkComment', async ()=>{
  render(
    <ThemeProvider>
      <BrowserRouter>
        <AllTheBooks
            arrBooks={arrBooks}
            arrBooksForCategory={arrBooksForCategory}
            searchCard={[]}
          />
      </BrowserRouter>
    </ThemeProvider>
  )
  const commentButtons = screen.getAllByTestId('commentButton')
  fireEvent.click(commentButtons[0])
  const commentsArea = await screen.findAllByTestId('test-comment')
  expect(commentsArea).toHaveLength(5)
})

