import styled from "styled-components";

export const HomeContainer = styled.div``;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .backgroundCoffe__img {
    @media (max-width: 980px) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: 865px) {
      width: 350px;
      height: 350px;
    }

    @media (max-width: 840px) {
      width: 300px;
      height: 300px;
    }
  }
`;

export const BackgroundPhrases = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 980px) {
    justify-content: center;
    row-gap: 2rem;
  }

  @media (max-width: 865px) {
    font-size: 0.9rem;
    justify-content: center;
    row-gap: 2rem;
  }

  @media (max-width: 840px) {
    font-size: 0.75rem;
    justify-content: center;
    row-gap: 1rem;
  }
`;

export const TitleBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const BackgroundTitle = styled.h1`
  color: ${(props) => props.theme["base-title"]};
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;

  @media (max-width: 1275px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1040px) {
    font-size: 2.25rem;
  }

  @media (max-width: 980px) {
    font-size: 2rem;
  }

  @media (max-width: 865px) {
    font-size: 1.75rem;
  }

  @media (max-width: 748px) {
    font-size: 1.5rem;
  }
`;

export const BackgroundSubtitle = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1.3;
  font-size: 1.5rem;

  @media (max-width: 1600px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1095px) {
    font-size: 1.15rem;
  }

  @media (max-width: 1040px) {
    font-size: 1rem;
  }

  @media (max-width: 865px) {
    font-size: 0.875rem;
    line-height: 1.1;
    margin-top: 0.25rem;
  }
`;

export const QualityPhrasesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 1275px) {
    grid-gap: 1rem;
  }
`;

export const QualityPhrases = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: ${(props) => props.theme["base-text"]};

  @media (max-width: 1275px) {
    font-size: 1rem;
  }

  @media (max-width: 1040px) {
    font-size: 0.9rem;
  }

  @media (max-width: 790px) {
    font-size: 0.875rem;
  }

  @media (max-width: 748px) {
    font-size: 0.75rem;
  }
`;

export const ShoppingCartLogo = styled.div`
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
`;

export const TimerLogo = styled.div`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
`;

export const PackageLogo = styled.div`
  background-color: ${(props) => props.theme["base-text"]};
  color: ${(props) => props.theme.white};
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
`;

export const CoffeLogo = styled.div`
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
`;

export const MenuTitle = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.3;
  margin-top: 5rem;
`;
