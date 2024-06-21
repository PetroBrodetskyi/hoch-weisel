import React, { useRef, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ showModal, closeModal, imagePath }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <div className={`${styles.modal} ${showModal ? styles.showModal : ''}`}>
      <div ref={modalRef} className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>&times;</span>
        <img src={imagePath} alt="Зображення" className={styles.modalImage} />
      </div>
    </div>
  );
}

export default Modal;
