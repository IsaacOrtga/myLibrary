import Modal from "../../pure/modal/Modal";
import Cookies from "js-cookie";
import { useState } from "react";

function SaveBooks() {
    const [showModal, setShowModal] = useState(false);

    const activeModal = () => {
        setShowModal(!showModal);
    }


  return (
    <div className="saveButtonContent">
      <button className="saveBookButton" onClick={activeModal}>Guardar Libro</button>
      <select className="selectBook" name="saveBook">
        <option value="bookshelf">Librería (leídos)</option>
        <option value="library">Biblioteca (pendientes)</option>
      </select>
      {showModal && <Modal closeModal={activeModal} />}
    </div>
  );
}
export default SaveBooks;
