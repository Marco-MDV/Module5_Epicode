import { Row } from 'react-bootstrap'
import CategoryBooks from './categoryBooks/CategoryBooks'
import CategoryBooksSearch from './categoryBooksSearch/CategoryBooksSearch'

export default function AllTheBooks({ arrBooksForCategory, arrBooks, searchCard, hendleCLick }) {
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

           {
             arrBooksForCategory.map((category, index) => {
                return(
                    <Row>
                        <CategoryBooks
                            title={arrBooksForCategory[index][0].category}
                            books={category}
                            hendleCLick={hendleCLick}
                        />
                    </Row>
                )
             })
           }
        </>
    )
}