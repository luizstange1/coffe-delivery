import styled from "styled-components";

export const MenuContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 4.25rem;
  position: relative;
`;

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  row-gap: 0.5rem;
  padding: 1rem;
`;

export const ProductImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  top: -10%;
`;

export const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 6rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const TagWrapping = styled.div`
  display: flex;
  column-gap: 0.25rem;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  line-height: 0.9;
  font-size: 0.9rem;
`;

export const ProductName = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: 900;
  line-height: 1.3;
  font-size: 1.25rem;
`;

export const ProductDetails = styled.p`
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.875rem;
  line-height: 1.3;
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  margin-top: 1rem;
`;

export const Price = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;

export const ContainerAddToCart = styled.div`
  display: flex;
  column-gap: 0.5rem;
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

export const GoToCartButton = styled.a`
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  padding: 1rem 3rem;
  column-gap: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
