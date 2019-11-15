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

  width: 720px;
  padding: 10px 20px;
  height: auto;
  border-radius: 4px;
`;

export const Header = styled.div`
  margin-bottom: 25px;
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
      border: 0;
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

export const Tool = styled.ul`
  padding: 10px 15px;
  border-radius: 4px;
  background: #ebeaed;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;

    a {
      color: #170c3a;
      font-weight: bold;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 30px;
      width: 30px;
      border: 0;

      color: #8f8a9b;
      font-weight: bold;
      background: none;
    }
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    color: #8f8a9b;
  }
`;
