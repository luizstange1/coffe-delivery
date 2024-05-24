import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

export const TitleContainer = styled.div`
  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }

  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["yellow-dark"]};
  font-weight: 800;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1160px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  span {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    :first-child {
      padding: 0.5rem;
      border-radius: 1000px;
      color: ${(props) => props.theme.white};
    }

    .mapPin__icon {
      background-color: ${(props) => props.theme.purple};
    }

    .timer__icon {
      background-color: ${(props) => props.theme.yellow};
    }

    .dollar__icon {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
