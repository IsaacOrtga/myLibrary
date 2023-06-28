import PropTypes from 'prop-types';
import './results.css';

export const Results = ({ booksData }) => {
  const hasBooks = booksData?.length > 0;
  return (
    <main className='resultsContent'>
      {hasBooks ? ( booksData.map(book => (
        <div className='booksContent' key={book.title}>
        <img className='bookImg' src={book.imageLinks.smallThumbnail} alt="Book Cover" />
          <h2 className='bookTitle'>{book.title}</h2>
          <p className='bookYear'>{book.publishedDate}</p>
          <p className='bookAuthor'>{book.authors}</p>
          <p className='bookDescription'>{book.description}</p>
        </div>
      ))) : ( "No se han encontrado resultados para esta búsqueda")}
    </main>
  );
};
Results.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      resume: PropTypes.string,
      year: PropTypes.string,
      editorial: PropTypes.string,
      cover: PropTypes.string,
    })
  ).isRequired,
};
