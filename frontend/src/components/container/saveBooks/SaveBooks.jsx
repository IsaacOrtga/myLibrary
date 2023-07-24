// import Modal from "../../pure/modal/Modal";
// import Cookies from "js-cookie";
import { useContext } from "react";
import './saveBooks.css';
import { ModalContext } from "../../useContext/ModalContext";

function SaveBooks({index}) {
    const {showModal, setShowModal, modalIndex, setModalIndex} = useContext(ModalContext);

    const activeModal = () => {
        setShowModal(!showModal);
        setModalIndex(index)
    }


  return (
    <div className="saveButtonContent">
      <button className="saveBookButton" onClick={activeModal}>Guardar Libro</button>
      <select className="selectBook" name="saveBook">
        <option value="bookshelf">Librería (leídos)</option>
        <option value="library">Biblioteca (pendientes)</option>
      </select>
      {/* {showModal && <Modal closeModal={activeModal} modalIndex={modalIndex} />} */}
    </div>
  );
}
export default SaveBooks;
