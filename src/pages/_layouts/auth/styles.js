import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #353372, #6554c0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 4px;

  text-align: center;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #f5f4f6;

      height: 30px;
      width: 325px;
      margin-top: 5px;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #b1adb9;

      align-self: center;
    }

    button {
      height: 30px;
      width: 325px;
      margin-top: 10px;

      align-self: center;
      border: 0;
      border-radius: 4px;

      background: #365df0;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#365df0')};
      }
    }
  }

  img {
    margin-top: 50px;
  }

  a {
    margin-top: 15px;
    color: #365df0;
    font-weight: bold;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
