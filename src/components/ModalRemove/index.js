import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { IoIosClose } from 'react-icons/io';

import api from '~/services/api';

import { ModalsRemove, Content, PimaryButton, SecondButton } from './styles';

export default function ModalRemove({
  modalRemoveOpen,
  closeModalRemove,
  idTool,
}) {
  async function handleRemoveTool({ idTool: id }) {
    try {
      await api.delete(`tools/${id}`);
      toast.success('Tool, excluded!');
      closeModalRemove();
    } catch (err) {
      toast.error('Could not delete tool.');
      closeModalRemove();
    }
  }

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
          <PimaryButton type="button" onClick={() => handleRemoveTool(idTool)}>
            Yes, remove
          </PimaryButton>
        </footer>
      </Content>
    </ModalsRemove>
  );
}

ModalRemove.propTypes = {
  modalRemoveOpen: PropTypes.bool.isRequired,
  closeModalRemove: PropTypes.func.isRequired,
  idTool: PropTypes.string.isRequired,
};
