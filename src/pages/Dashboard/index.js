import React, { useState, useEffect } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

import api from '~/services/api';
import ModalRemove from '~/components/ModalRemove';

import { Container, Header, Content, Tool } from './styles';

export default function Dashboard() {
  const [tools, setTools] = useState([]);
  const [modalRemoveOpen, setModalRemoveOpen] = useState(false);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools');

      setTools(response.data);
    }
    loadTools();
  }, []);

  function openModalRemove() {
    setModalRemoveOpen(true);
  }

  function closeModalRemove() {
    setModalRemoveOpen(false);
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

            <button type="button">
              <IoIosAdd size={20} />
              Add
            </button>
          </nav>
        </Header>

        <ul>
          {tools.map(tool => (
            <Tool key={tool.id}>
              <div>
                <a href={tool.link}>{tool.title}</a>
                <button type="button" onClick={openModalRemove}>
                  <IoIosClose size={20} />
                </button>
                <ModalRemove
                  modalRemoveOpen={modalRemoveOpen}
                  closeModalRemove={closeModalRemove}
                />
              </div>
              <p>{tool.description}</p>
              {tool.tags.map(tag => (
                <span>{tag}</span>
              ))}
            </Tool>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
