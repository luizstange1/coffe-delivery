import styled from "styled-components";

export const Payment = styled.div`
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

export const ContainerPaymentMethod = styled.div`
  display: flex;
  column-gap: 0.75rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const PaymentButton = styled.button`
  width: 11.167rem;
  background-color: ${(props) => props.theme.base.button};
  border-radius: 6px;
  padding: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.base.text};
  line-height: 1.6;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.75rem;
  transition: 0.1s ease-in-out;
  border: 2px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.base.hover};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.purple.default};
  }

  .creditCard__icon,
  .bank__icon,
  .money__icon {
    color: ${(props) => props.theme.purple.default};
  }
`;
