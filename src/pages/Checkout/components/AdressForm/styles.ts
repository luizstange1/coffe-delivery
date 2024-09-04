import styled from "styled-components";

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.base.card};
  padding: 2.5rem;
  max-width: 40rem;
  border-radius: 6px;
`;

export const HeaderWrapping = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-bottom: 2rem;

  .mapPinLine__icon {
    color: ${(props) => props.theme.yellow.dark};
  }

  .dolar__icon {
    color: ${(props) => props.theme.purple.default};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  span:first-child {
    line-height: 1.3;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputWrapping = styled.div``;

export const AdressInputBasis = styled.input`
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.base.input};
  border: 2px solid ${(props) => props.theme.base.button};
  margin-bottom: 1rem;
`;

export const CEPInput = styled(AdressInputBasis)`
  width: 40%;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const StreetInput = styled(AdressInputBasis)`
  width: 100%;
`;

export const NumberInput = styled(AdressInputBasis)`
  width: 7rem;
  margin-right: 1rem;
`;

export const ComplementInput = styled(AdressInputBasis)`
  width: 27rem;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const NeighborhoodInput = styled(AdressInputBasis)`
  width: 40%;
  margin-right: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CityInput = styled(AdressInputBasis)`
  width: 40%;
  margin-right: 1rem;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const UFInput = styled(AdressInputBasis)`
  width: 14.2%;

  @media (max-width: 600px) {
    width: 30%;
  }
`;
