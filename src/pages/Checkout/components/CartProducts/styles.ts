import styled from "styled-components";

export const Products = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.base.button};
`;

export const ProductImg = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const ContainerNameAndPriceProduct = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
`;

export const NameAndPriceWrapping = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 7rem;
`;

export const ProductName = styled.span``;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme.base.title};
  font-weight: 600;
`;

export const ButtonWrapping = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const SelectQuantityProducts = styled.div`
  background-color: ${(props) => props.theme.base.button};
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
    color: ${(props) => props.theme.base.title};
  }
`;

export const IndreaseAndDeacreaseButtonStyles = styled.button`
  width: 35%;
  height: 100%;
  background-color: ${(props) => props.theme.base.button};
  color: ${(props) => props.theme.purple.default};
  font-size: 1.5rem;
  border-radius: 6px;
  transition: 0.1s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.purple.dark};
  }
`;

export const IncreaseButton = styled(IndreaseAndDeacreaseButtonStyles)``;

export const DecreaseButton = styled(IndreaseAndDeacreaseButtonStyles)``;

export const RemoveProductButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.base.text};
  background-color: ${(props) => props.theme.base.button};
  border-radius: 6px;
  padding: 0.25rem 0.5rem;

  .trash__icon {
    color: ${(props) => props.theme.purple.default};
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
  background-color: ${(props) => props.theme.yellow.default};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0.75rem;
  margin-top: 1.5rem;
  transition: 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.yellow.dark};
  }
`;

export const WrappingButtonsToConfirmPurchaseAndReturnToMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const KeepBuying = styled.button`
  background-color: ${(props) => props.theme.base.alternative};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  width: 100%;
  padding: 0.75rem;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;
