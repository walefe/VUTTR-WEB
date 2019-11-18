import React, { useState, useEffect } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

import api from '~/services/api';

import { Container, Header, Content, Tool } from './styles';

export default function Dashboard() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('tools');

      setTools(response.data);
    }
    loadTools();
  }, []);

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
                <button type="button">
                  <IoIosClose size={20} />
                </button>
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
