import React, { useState, useEffect } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

import api from '~/services/api';

import ModalAdd from '~/components/ModalAdd';
import ModalRemove from '~/components/ModalRemove';

import { Container, Header, Content, Tool } from './styles';

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [idTool, setIdTools] = useState('');

  const [modalRemoveOpen, setModalRemoveOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools');

      setTools(response.data);
    }
    loadTools();
  }, []);

  function openModalRemove(id) {
    setModalRemoveOpen(true);
    setIdTools({ idTool: id });
  }

  function closeModalRemove() {
    setModalRemoveOpen(false);
  }

  function openModalAdd() {
    setModalAddOpen(true);
  }

  function closeModalAdd() {
    setModalAddOpen(false);
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>VUTTR</h1>
          <h2>Very Usefull Tools to Remember</h2>

          <nav>
            <div>
              <input className="tools" type="text" placeholder="search" />
              <input type="checkbox" name="tools" />
              <p>search in tags only</p>
            </div>

            <button type="button" onClick={openModalAdd}>
              <IoIosAdd size={20} />
              Add
            </button>
            <ModalAdd
              modalAddOpen={modalAddOpen}
              closeModalAdd={closeModalAdd}
            />
          </nav>
        </Header>

        <ul>
          {tools.map(tool => (
            <Tool key={tool._id}>
              <div>
                <a href={tool.link}>{tool.title}</a>
                <button type="button" onClick={() => openModalRemove(tool._id)}>
                  <IoIosClose size={20} />
                </button>
              </div>
              <p>{tool.description}</p>
              {tool.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </Tool>
          ))}
          <ModalRemove
            modalRemoveOpen={modalRemoveOpen}
            closeModalRemove={closeModalRemove}
            idTool={idTool}
          />
        </ul>
      </Content>
    </Container>
  );
}
