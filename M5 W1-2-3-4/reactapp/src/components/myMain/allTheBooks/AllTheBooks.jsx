import { Row } from 'react-bootstrap'
import CategoryBooks from './categoryBooks/CategoryBooks'
import CategoryBooksSearch from './categoryBooksSearch/CategoryBooksSearch'

export default function AllTheBooks({ booksFantasy, booksHistory, booksHorror, booksRomance, booksScifi, arrBooks, searchCard, hendleCLick }) {

    //console.log(searchCard);


    return (
        <>
            <Row>
                <CategoryBooksSearch
                    title='search'
                    searchCard={searchCard}
                    category='search'
                    hendleCLick={hendleCLick}
                    arrBooks={arrBooks}
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksFantasy'
                    books={booksFantasy}
                    category='uno'
                    hendleCLick={hendleCLick}
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksHistory'
                    books={booksHistory}
                    category='due'
                    hendleCLick={hendleCLick}
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksHorror'
                    books={booksHorror}
                    category='due'
                    hendleCLick={hendleCLick}
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksRomance'
                    books={booksRomance}
                    category='due'
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksScifi'
                    books={booksScifi}
                    category='due'
                />
            </Row>
        </>
    )
}