import React from 'react';
import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import styles from './CustomModal.module.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      overlayClassName={styles.modal__overlay}
      className={styles.modal__content}
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      <button className={styles.close} onClick={onClose}>
        <svg className={styles.close__icon}>
          <use href={`${icons}#icon-close`} />
        </svg>
      </button>

      <div className={styles.modal__body}>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
