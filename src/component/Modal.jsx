import React from "react";
import "../style/modal.css";

const Modal = ({ show, onClose, children, header }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3>{header}</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
