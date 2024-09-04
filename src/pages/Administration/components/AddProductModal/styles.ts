import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  position: fixed;
  padding: 2rem 6rem;
  row-gap: 1rem;
  z-index: 1000;
  position: fixed;
  top: 20%;
  right: 25%;
  align-items: center;

  -webkit-box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.75);
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.base.text};
`;

export const InputWrapping = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 8px;
  background-color: ${(props) => props.theme.base.input};
  height: 2.5rem;
  width: 100%;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  &::file-selector-button {
    margin-right: 1.25rem;
    border: none;
    background-color: ${(props) => props.theme.base.input};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme.base.text};
    cursor: pointer;
  }
`;

export const CreateProductButton = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px;
  height: 2.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.purple.default};
  color: ${(props) => props.theme.white};

  transition: 0.3s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(120%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 75%;
  }
`;

export const TargetingText = styled.span`
  font-size: 1.1rem;
  line-height: 1.2;
  color: ${(props) => props.theme.base.text};
`;
