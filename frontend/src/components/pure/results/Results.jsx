import PropTypes from 'prop-types';
import './results.css';
import notImage from '../../../assets/public/img/noCover.png';

 function Results ({ booksData, noData})  {
  const hasBooks = booksData?.length > 0;

  return (
    <div className='resultsContent'>
      {hasBooks ? ( booksData.map((book, key) => (
        <div className='booksContent' key={key}>
           <img className='bookImg' src={book.imageLinks?.smallThumbnail || book.imageLinks?.thumbnail || notImage} alt={book.title} />    
          <h2 className='bookTitle'>{book?.title || 'Título no disponible'}</h2>
          <p className='bookYear'>{book?.publishedDate || 'Fecha no disponible'}</p>
          <p className='bookAuthor'>{book?.authors || 'Author no disponible'}</p>
          <p className='bookDescription'>{book?.description || 'Descripción no disponible'}</p>
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