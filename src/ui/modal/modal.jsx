import "./modal.css";

const Modal = ({ title, message, children, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="title">{title}</h2>
        <p className="modal__text">{message}</p>
        {children}
        <ul className="modal__btns-wrap">
          <li>
            <button onClick={onCancel} className={"btn btn--secundary"}>
              cancelar
            </button>
          </li>
          <li>
            <button onClick={onConfirm} className={"btn btn--primary"}>
              confirmar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
