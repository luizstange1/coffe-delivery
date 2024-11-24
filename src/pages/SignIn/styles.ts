import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  column-gap: 8.75rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.base.title};
  font-size: 3rem;
  line-height: 1.3;
  font-weight: bold;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  > span {
    line-height: 1.3;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.base.title};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  > span {
    color: ${(props) => props.theme.black};
    display: flex;
    line-height: 1.3;
    column-gap: 0.25rem;

    :first-child {
      color: ${(props) => props.theme.purple.default};
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.purple.default};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const LoginDataInput = styled.input`
  border: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.base.input};
  border-radius: 8px;
`;

export const WarningMessage = styled.span`
  color: ${(props) => props.theme.red};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;
