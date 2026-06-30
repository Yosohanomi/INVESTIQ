import { createPortal } from "react-dom";
import SVGIcon from "../../../assets/svg/symbol-defs.svg";
import styles from './LogoutModal.module.scss';

export const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  
  const container = document.getElementById("modal");
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div 
      className={styles.modalBackdrop} 
      id="backdrop-footer"
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContainer}>
        <button 
          className={styles.modalCloseButton} 
          type="button" 
          id="close-modal-footer-btn"
          onClick={onClose}
        >
          <svg className={styles.modalCloseIcon}>
            <use href={`${SVGIcon}#icon-cross`} />
          </svg>
        </button>
        
        <h2 className={styles.modalTitle}>Ви впевнені?</h2>
        
        <div className={styles.modalBtnThumb}>
          <button 
            className={styles.modalBtnYes}
            onClick={onConfirm}
          >
            так
          </button>
          <button 
            className={styles.modalBtnNo}
            onClick={onClose}
          >
            ні
          </button>
        </div>
      </div>
    </div>,
    container
  );
};