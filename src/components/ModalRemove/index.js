import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';

import { ModalsRemove, Content, PimaryButton, SecondButton } from './styles';

export default function ModalRemove({ modalRemoveOpen, closeModalRemove }) {
  return (
    <ModalsRemove
      isOpen={modalRemoveOpen}
      onRequestClose={closeModalRemove}
      ariaHideApp={false}
    >
      <Content>
        <header>
          <h3>Remove Tool</h3>
          <button type="button" onClick={closeModalRemove}>
            <IoIosClose size={20} />
          </button>
        </header>
        <p>Are you sure want to remove tool?</p>

        <footer>
          <SecondButton type="button" onClick={closeModalRemove}>
            Cancel
          </SecondButton>
          <PimaryButton type="button">Yes, remove </PimaryButton>
        </footer>
      </Content>
    </ModalsRemove>
  );
}

ModalRemove.propTypes = {
  modalRemoveOpen: PropTypes.bool.isRequired,
  closeModalRemove: PropTypes.func.isRequired,
};
