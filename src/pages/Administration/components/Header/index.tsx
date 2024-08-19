import * as S from "./styles";
import logoCoffeDelivery from "../../../../assets/coffe-delivery-logo.svg";

export function Header() {
  return (
    <S.Header>
      <S.Logo src={logoCoffeDelivery} />
    </S.Header>
  );
}
