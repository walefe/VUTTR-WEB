import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 15px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      width: 60px;

      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #353372;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
  }

  button {
    height: 30px;
    width: 71px;
    border: 0;
    margin-left: 15px;
    border-radius: 4px;
    background: #365df0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#365df0')};
    }
  }
`;
