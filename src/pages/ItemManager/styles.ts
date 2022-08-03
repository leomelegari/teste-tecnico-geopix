import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.313rem;

  background-color: #35cd;

  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  > span {
    font-family: "Roboto", sans-serif;

    :nth-child(2) {
      font-weight: bold;
    }
  }
`;

export const ContainerSelect = styled.div`
  select {
    width: 250px;
    height: 35px;
    font-size: 1rem;
    color: #fff;

    border: none;
    border-radius: 5px;
    background-color: #171717;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 250px;
    height: 35px;
    font-size: 1rem;
    color: #fff;

    border: none;
    border-radius: 5px;
    background-color: #171717;

    padding: 0 0.275rem;

    ::placeholder {
      color: #fff;
    }
  }

  span {
    margin-top: 0.2rem;
    font-family: "Roboto", sans-serif;
    color: yellow;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    height: 35px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.2s;
  }

  button.add {
    background-color: #124506;
    :hover {
      background-color: green;
    }
  }
  button.remove {
    background-color: #7a0c0c;
    :hover {
      background-color: red;
    }
  }
  button.clear {
    background-color: #ab9a02;
    :hover {
      background-color: yellow;
      color: #000;
    }
  }
`;
