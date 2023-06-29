import PropTypes from 'prop-types';
import './results.css';

 function Results ({ booksData, noData})  {
  const hasBooks = booksData?.length > 0;
  return (
    <div className='resultsContent'>
      {hasBooks ? ( booksData.map(book => (
        <div className='booksContent' key={book.title}>
          {/* <img className='bookImg' src={book.imageLinks.thumbnail} alt={book.title} />   */}
          <h2 className='bookTitle'>{book.title}</h2>
          <p className='bookYear'>{book.publishedDate}</p>
          <p className='bookAuthor'>{book.authors}</p>
          <p className='bookDescription'>{book.description}</p>
        </div>
      ))) : (noData && <p>{noData}</p>)}
    </div>
  );
}
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
  noData: PropTypes.string,
};

export default Results;