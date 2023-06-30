import PropTypes from 'prop-types';
import './results.css';

 function Results ({ booksData, noData})  {
  const hasBooks = booksData?.length > 0;
  return (
    <div className='resultsContent'>
      {hasBooks ? ( booksData.map((book, key) => (
        <div className='booksContent' key={key}>
           <img className='bookImg' src={book.imageLinks?.smallThumbnail} alt={book.title} />    
          <h2 className='bookTitle'>{book?.title}</h2>
          <p className='bookYear'>{book?.publishedDate}</p>
          <p className='bookAuthor'>{book?.authors}</p>
          <p className='bookDescription'>{book?.description}</p>
        </div>
      ))) : (noData && <p>{noData}</p>)}
    </div>
  );
}
Results.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
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