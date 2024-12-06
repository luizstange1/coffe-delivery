import * as S from "./styles";
import logoCoffeDelivery from "../../../../assets/coffe-delivery-logo.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Logo
        src={logoCoffeDelivery}
        onClick={() => {
          navigate("/");
        }}
      />
    </S.Header>
  );
}
