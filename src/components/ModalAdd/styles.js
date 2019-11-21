import styled from 'styled-components';
import Modal from 'react-modal';
import { darken } from 'polished';

import { Form, Input } from '@rocketseat/unform';

export const ModalsAdd = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100%;
  max-width: 100%;

  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  padding: 10px 10px;
  width: 400px;
  min-height: 400px;
  height: auto;
  border-radius: 4px;

  background: #fff;

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    h4 {
      margin-left: 15px;
    }

    button {
      height: 30px;
      width: 30px;
      margin-right: 15px;
      border: 0;

      color: #8f8a9b;
      font-weight: bold;
      background: none;

      svg {
        margin-left: 15px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const FormAdd = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    width: 350px;
    height: 70px;
    margin: 20px 0;
    padding: 8px 5px;
    border-radius: 4px;
    border: 1px solid #ebeaed;
    background: #f5f4f6;
  }

  button {
    align-self: flex-end;

    margin-top: 10px;
    margin-right: 15px;
    height: 30px;
    width: 71px;
    border: 0;
    border-radius: 4px;

    background: #365df0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#365df0')};
    }
  }

  span {
    color: #f95e5a;
  }
`;

export const InputAdd = styled(Input)`
  width: 350px;
  margin: 12px 0;
  padding: 5px 5px;
  border-radius: 4px;
  border: 1px solid #ebeaed;
  border-radius: 4px;
  background: #f5f4f6;
`;
