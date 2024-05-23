import * as S from "./styles";
import backgroundCoffeImg from "../../assets/background-coffe-img.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Menu } from "./components/Menu";

export function Home() {
  return (
    <S.HomeContainer>
      <S.BackgroundContainer>
        <S.BackgroundPhrases>
          <S.TitleBackgroundContainer>
            <S.BackgroundTitle>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </S.BackgroundTitle>

            <S.BackgroundSubtitle>
              Com o Coffe Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </S.BackgroundSubtitle>
          </S.TitleBackgroundContainer>

          <S.QualityPhrasesContainer>
            <S.QualityPhrases>
              <S.ShoppingCartLogo>
                <ShoppingCart weight="fill" />
              </S.ShoppingCartLogo>
              Compra simples e segura
            </S.QualityPhrases>

            <S.QualityPhrases>
              <S.PackageLogo>
                <Package weight="fill" />
              </S.PackageLogo>
              Embalagem mantém o café intacto
            </S.QualityPhrases>

            <S.QualityPhrases>
              <S.TimerLogo>
                <Timer weight="fill" />
              </S.TimerLogo>
              Entrega rápida e rastreada
            </S.QualityPhrases>

            <S.QualityPhrases>
              <S.CoffeLogo>
                <Coffee weight="fill" />
              </S.CoffeLogo>
              O café chega fresquinho até você
            </S.QualityPhrases>
          </S.QualityPhrasesContainer>
        </S.BackgroundPhrases>

        <img src={backgroundCoffeImg} alt="" />
      </S.BackgroundContainer>

      <S.MenuTitle>Nossos cafés</S.MenuTitle>

      <Menu />
    </S.HomeContainer>
  );
}
