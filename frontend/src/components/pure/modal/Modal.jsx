import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../useContext/ModalContext";
import "./modal.css";

function Modal({ booksData, selectedValue }) {
  // const [bookCookies, setBookCookies] = useState([]);
  const { setShowModal, modalIndex } = useContext(ModalContext);

  const closeModal = () => {
    setShowModal(false);
  };

  const saveCookies = () => {
    const bookToSave = booksData[modalIndex];
    Cookies.set("book", JSON.stringify(bookToSave), { expires: 1 });
    const savedBook = Cookies.get("book");
    if (savedBook) {
      const book = JSON.parse(decodeURIComponent(savedBook));
      console.log(book);
    }
  };
  return (
    <div className="modalOverlay" onClick={closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h4 className="modalTitle">Comenta la obra:</h4>
        <textarea
          maxLength="150"
          className="textArea"
          placeholder="Ejemplo: La trama da muchos giros, un thriller que me llenó de emociones en cada capítulo. En esta obra el autor dio un giro con respecto al estilo de su anterior novela. 
  a(Máximo 150 caracteres)"
        ></textarea>
        <button className="saveButtonModal" onClick={saveCookies}>
          Guardar en {selectedValue}
        </button>
      </div>
    </div>
  );
}

export default Modal;
