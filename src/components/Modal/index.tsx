/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, useRef } from 'react';

import { Book } from 'components/Book';
import { AnimatePresence, motion } from 'framer-motion';
import { Ibook } from 'types/livros';

import { Background, CloseModalButton, ModalWrapper } from './style';

interface ModalProps {
  showModal: boolean;
  selectedItem: Ibook;
  toggleModal: () => void;
}

export function Modal({ showModal, toggleModal, selectedItem }: ModalProps) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef === e.target) {
      toggleModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === showModal) {
        toggleModal();
      }
    },
    [showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);

    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <AnimatePresence>
      {showModal && (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <Book item={selectedItem} />
            <CloseModalButton aria-label="Close modal" onClick={toggleModal} />
          </ModalWrapper>
        </Background>
      )}
    </AnimatePresence>
  );
}
