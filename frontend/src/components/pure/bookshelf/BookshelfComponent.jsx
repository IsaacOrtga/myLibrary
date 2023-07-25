import Cookies from "js-cookie";
import './bookshelf.css';
function BookshelfComponent ()  {
  const savedBook = Cookies.get("book");
  const book = JSON.parse(decodeURIComponent(savedBook));
  console.log(book)
  return (
    <div className="bookshelfContent">
    <h2>Estantería</h2>
    <h2>Libros leídos</h2>
    <div className='readedBooksContent'>
{book ?  book.map((book, index) => (
  <div className="bookshelfBooks" key={index}>
  <h2>{book.title}</h2>
  {book.comment &&<div className="commentContent">
   <h5>Tu comentario:</h5>
  <p>{book.comment}</p></div>}
  <p>{book.authors}</p>
  <p>{book.publishedDate}</p>
  <img src={book.image}></img>
  <span className="spanDeleteBook">Eliminar</span>
  </div>
)) : 'No hay datos'}
    </div>
    </div>
  )
}
export default BookshelfComponent;