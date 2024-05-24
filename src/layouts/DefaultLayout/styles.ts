import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: calc(100vw - 10%);
  padding: 2rem 10rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  @media (max-width: 1600px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 1400px) {
    padding: 2rem;
  }

  @media (max-width: 1295px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 1275px) {
    padding: 2rem 0.5rem;
  }

  @media (max-width: 1095px) {
    padding: 2rem 0.25rem;
  }

  @media (max-width: 865px) {
    padding: 1.5rem 2rem;
  }
`;
