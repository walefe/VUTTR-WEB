import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { IoIosClose } from 'react-icons/io';
import * as Yup from 'yup';

import { ModalsAdd, Content, FormAdd, InputAdd } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  link: Yup.string()
    .url('url inválida')
    .required('Campo obrigatório'),
  description: Yup.string('Descrição inválida').required('Campo obrigatório'),
  tags: Yup.string(),
});

export default function ModalAdd({ modalAddOpen, closeModalAdd }) {
  return (
    <ModalsAdd
      isOpen={modalAddOpen}
      onRequestClose={closeModalAdd}
      ariaHideApp={false}
    >
      <Content>
        <div>
          <h4>Add New Tool</h4>
          <button type="button" onClick={closeModalAdd}>
            <IoIosClose size={20} />
          </button>
        </div>
        <FormAdd schema={schema}>
          <InputAdd name="title" type="title" placeholder="Tool" />
          <InputAdd name="link" type="link" placeholder="Tool Link" />
          <Input
            multiline
            name="description"
            type="description"
            placeholder="Description"
          />
          <InputAdd name="tags" type="tags" placeholder="Tags" />
          <button type="submit">Add Tool</button>
        </FormAdd>
      </Content>
    </ModalsAdd>
  );
}

ModalAdd.propTypes = {
  modalAddOpen: PropTypes.bool.isRequired,
  closeModalAdd: PropTypes.func.isRequired,
};
