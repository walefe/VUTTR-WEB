import styled from 'styled-components';
import Modal from 'react-modal';
import { darken } from 'polished';

export const ModalsRemove = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 500px;
  padding: 20px 20px;
  border-radius: 4px;

  background: #fff;

  p {
    margin: 15px 0;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  header {
    button {
      border: none;
      background: none;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }
`;

export const PimaryButton = styled.button`
  padding: 5px 15px;
  margin-left: 15px;
  margin-top: 5px;

  border: 0;
  border-radius: 4px;

  background: #365df0;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.1, '#365df0')};
  }
`;

export const SecondButton = styled.button`
  padding: 5px 15px;
  margin-left: 15px;
  margin-top: 5px;

  border: 0;
  border-radius: 4px;

  background: #e1e7fd;
  color: #365df0;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#E1E7FD')};
  }
`;
