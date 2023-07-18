import Cookies from "js-cookie";

function SaveBooks() {
  return (
    <div className="saveButtonContent">
      <button className="saveBookButton">Guardar Libro</button>
      <select className="selectBook" name="saveBook">
        <option value="bookshelf">Librería (leídos)</option>
        <option value="library">Biblioteca (pendientes)</option>
      </select>
    </div>
  );
}
export default SaveBooks;
