import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const ShoppingCart = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
`;

export const Location = styled.div`
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 8px;
  padding: 0.5rem;
  height: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem;

  span {
    font-weight: 500;
  }
`;

export const CartLogo = styled.a`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 8px;
  height: 2.375rem;
  width: 2.375rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    right: -5px;
    top: -10px;
    border-radius: 9999px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
