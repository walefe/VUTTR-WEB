import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;

  padding: 10px 20px;
  height: 100%;
  width: auto;
  min-width: 700px;
  border-radius: 4px;
`;

export const Header = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    margin-top: 25px;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }
    input,
    #tools {
      height: 25px;
      padding: 0 5px;
      margin-right: 5px;
      border: 1px solid #ebeaed;
      border-radius: 4px;
      background: #f5f4f6;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

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

    svg {
      margin-right: 3px;
    }
  }
`;

export const Tool = styled.li`
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 15px;

  border: 1px solid #b1adb9;
  background: #ebeaed;

  div {
    display: flex;
    justify-content: space-between;

    a {
      color: #170c3a;
      font-weight: bold;
    }

    button {
      height: 30px;
      width: 30px;
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

  p {
    font-size: 12px;
    max-width: 900px;
    margin-bottom: 8px;
    color: #8f8a9b;
  }

  span {
    background: #e1e7fd;
    color: #365df0;
    margin-right: 5px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    padding: 3px 4px;
  }
`;
