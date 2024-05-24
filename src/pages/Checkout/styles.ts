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
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  max-width: 40rem;
  border-radius: 6px;
`;

export const Adress = styled(BaseContainer)``;

export const HeaderWrapping = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-bottom: 2rem;

  .mapPinLine__icon {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .dolar__icon {
    color: ${(props) => props.theme.purple};
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

export const AdressInputBasis = styled.input`
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 2px solid ${(props) => props.theme["base-button"]};
  margin-bottom: 1rem;
`;

export const InputWrapping = styled.div``;

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

export const Payment = styled(BaseContainer)``;

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
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
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
    background-color: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.purple};
  }

  .creditCard__icon,
  .bank__icon,
  .money__icon {
    color: ${(props) => props.theme.purple};
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

export const Products = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme["base-button"]};
`;

export const ProductImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const NameAndPriceWrapping = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 7rem;
`;

export const ContainerNameAndPriceProduct = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
`;

export const ProductName = styled.span``;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme["base-title"]};
  font-weight: 600;
`;

export const SelectQuantityProducts = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 900;
  border-radius: 6px;

  span {
    width: 30%;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ButtonWrapping = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const IndreaseAndDeacreaseButtonStyles = styled.button`
  width: 35%;
  height: 100%;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};
  font-size: 1.5rem;
  border-radius: 6px;
  transition: 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const IncreaseButton = styled(IndreaseAndDeacreaseButtonStyles)``;

export const DecreaseButton = styled(IndreaseAndDeacreaseButtonStyles)``;

export const RemoveProdutButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0.25rem 0.5rem;

  .trash__icon {
    color: ${(props) => props.theme.purple};
  }
`;

export const WrappingFinalCartValues = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartFinalValueBaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  :last-child {
    font-weight: 900;
    font-size: 1.25rem;
  }
`;

export const PriceText = styled(CartFinalValueBaseStyle)``;

export const Values = styled(CartFinalValueBaseStyle)``;

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0.75rem;
  margin-top: 1.5rem;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
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
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-top: 1.5rem;
`;
