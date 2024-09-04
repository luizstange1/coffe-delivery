import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  column-gap: 12rem;

  @media (max-width: 1260px) {
    column-gap: 6rem;
  }

  @media (max-width: 1150px) {
    column-gap: 2rem;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    row-gap: 4rem;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 1.75rem;
`;

export const AdressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;

  .alert__modal {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 5%;
    left: 50%;
    width: 32rem;
    transform: translateX(-50%);
  }
`;

export const BaseContainer = styled.div`
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

export const ContainerCartItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

export const ContainerProducts = styled(BaseContainer)`
  row-gap: 1.5rem;
  border-radius: 6px 44px;
`;

export const ButtonWrapping = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  gap: 0.75rem;

  span {
    font-weight: 900;
  }
`;

export const BackToMenu = styled.button`
  background-color: ${(props) => props.theme.yellow.default};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
`;
