import PropTypes from 'prop-types';
import "./modal.css";
import { useContext } from 'react';
import { ModalContext } from '../../useContext/ModalContext';

function Modal() {
  const {setShowModal} = useContext(ModalContext);
  const closeModal = () => {
setShowModal(false)
  }
  return (
    <div className="modalOverlay" onClick={closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h4 className="modalTitle">Comenta la obra:</h4>
        <textarea 
        maxLength='150' 
        className="textArea" 
        placeholder='Lo leí en mis vacaciones en Canarias. Me sentí muy identificada con los personajes en ese momento de mi vida. 
        (Máximo 150 caracteres)'></textarea>
        <button className="saveButtonModal">Guardar</button>
      </div>
    </div>
  );
}


export default Modal;
