import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalImage src={image.largeImageURL} alt={image.tags} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
