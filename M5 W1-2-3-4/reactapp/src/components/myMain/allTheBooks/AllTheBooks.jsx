import booksFantasy from '../../../data/books/fantasy.json'
import booksHistory from '../../../data/books/history.json'
import booksHorror from '../../../data/books/horror.json'
import booksRomance from '../../../data/books/romance.json'
import booksScifi from '../../../data/books/scifi.json'
import CategoryBooks from './categoryBooks/CategoryBooks'
import { Row } from 'react-bootstrap'



export default function AllTheBooks() {
    return (
        <>
            <Row>
                <CategoryBooks
                    title='booksFantasy'
                    books={booksFantasy}
                    category='uno' 
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksHistory'
                    books={booksHistory}
                    category='due' 
                />
            </Row>
            <Row>
                <CategoryBooks
                    title='booksHorror'
                    books={booksHorror}
                    category='due' 
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