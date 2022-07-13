import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({modalActive, setModalActive}) => {
  return (
    <div
      className={modalActive ? `${styles.modal} scale-1` : `scale-0`}
      onClick={() => setModalActive(false)}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}></div>
    </div>
  );
};

export default Modal;
