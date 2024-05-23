import styled from "styled-components";

export const HomeContainer = styled.div``;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackgroundPhrases = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
`;

export const BackgroundSubtitle = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  line-height: 1.3;
  font-size: 1.5rem;
`;

export const QualityPhrasesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-gap: 1.5rem;
`;

export const QualityPhrases = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: ${(props) => props.theme["base-text"]};
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
