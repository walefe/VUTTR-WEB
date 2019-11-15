import React from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

import { Container, Header, Content, Tool } from './styles';

export default function Dashboard() {
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

        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>

        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized. All in one tool to organize teams
              and ideas. Write, plan, collaborate, and get organized.
            </p>
          </li>
        </Tool>

        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
        <Tool>
          <li>
            <div>
              <a href="teste">TESTE</a>
              <button type="button">
                <IoIosClose size={20} />
              </button>
            </div>
            <p>
              All in one tool to organize teams and ideas. Write, plan,
              collaborate, and get organized.
            </p>
          </li>
        </Tool>
      </Content>
    </Container>
  );
}
