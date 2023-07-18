import PropTypes from 'prop-types';
import "./modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalOverlay" onClick={closeModal}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h4 className="modalTitle">Comenta la obra:</h4>
        <textarea className="textArea"></textarea>
        <button className="saveButtonModal">Guardar</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
}
export default Modal;
