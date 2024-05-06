import React, { useState } from 'react';
import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import Welcome from './components/myMain/welcome/Welcome';
import '@testing-library/jest-dom'
import { ThemeProvider } from './components/themeContext/ThemeContext';
import MyCard from './components/myMain/allTheBooks/categoryBooks/card/Card';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import CommentArea2 from './components/myMain/commentArea2/CommentArea2';
import NavbarCollapse from './components/myNav/navBarCollapse/NavbarCollapse';
import AllTheBooks from './components/myMain/allTheBooks/AllTheBooks';
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
  const textTitle = screen.getByText('EpiBooks!');
  expect(textTitle).toBeVisible();
})

/* 2 */
it('check numbers cards', () => {
  render(<BrowserRouter><MyCard book={bookFake} valueId='idCard'/></BrowserRouter>)
  const checkCards = screen.getAllByTestId('idCard')
  checkCards.forEach(checkCard =>{
    expect(checkCard).toBeInTheDocument();
    expect(checkCard).toBeVisible();
  })
})

/* 3 */
it('check CommentArea', () => {
  render(<CommentArea2 comment={comment}/>)
  const CommentArea= screen.getByTestId('CommentArea')
  expect(CommentArea).toBeInTheDocument();
  expect(CommentArea).toBeVisible();
})

/* 4 */
/* devi aggiustare il to have length */
it('search camp',()=>{
  render(<MemoryRouter><ThemeProvider><NavbarCollapse/></ThemeProvider></MemoryRouter>);
  const input = screen.getByPlaceholderText('Search your book...')
  fireEvent.change(input, {target: {value:'Wish'}})
  const allTheBooks = screen.findAllByTestId('searchCard')
  expect(allTheBooks)/* .toHaveLength(2) */
})

/* 5 */
it('Checking Bookmarks', () => {
  render(<BrowserRouter><MyCard book={bookFake}/></BrowserRouter>)
  const checkCard = screen.getByText('Select')
  fireEvent.click(checkCard)
  const checkSelected = screen.getByText('Selected')
  expect(checkSelected).toBeVisible();
})

/* 6 */
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
const setAsinVlue =(variable)=>{variable}
const setShow=(variable)=>{variable}

const hookAsinVlue=()=>{setAsinVlue('0316389706'); setShow(true) }
const requestInfo =()=>{'0316389706'}
describe('check for see comment',()=>{
  it('Chek button comment',()=>{
    render(
      <BrowserRouter>
        <MyCard book={bookFake} hookAsinVlue={hookAsinVlue} requestInfo={requestInfo}/>
      </BrowserRouter>
    )
    const comment = screen.getByText('Comment')
    fireEvent.click(comment)
  })
  it('check comment',()=>{
    render(<CommentArea2 comment={comment}/>)
    const CommentArea= screen.getByTestId('CommentArea')
    expect(CommentArea).toBeInTheDocument();
    expect(CommentArea).toBeVisible();
  })
})

