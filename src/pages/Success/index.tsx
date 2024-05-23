import * as S from "./styles";
import deliveryLogo from "../../assets/delivery-img.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const {
    orderSummary,
    setCartProducts,
    setFormOfPayment,
    setInfoCep,
    setResidenceNumber,
  } = useContext(CartContext);

  const { formOfPayment, infoCep, residenceNumber } = orderSummary;

  useEffect(() => {
    setCartProducts([]);
    setFormOfPayment("");
    setInfoCep({
      bairro: "",
      localidade: "",
      logradouro: "",
      uf: "",
    });
    setResidenceNumber(undefined);
  }, [orderSummary]);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 10000);
  }, []);

  return (
    <S.SuccessContainer>
      <S.TitleContainer>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </S.TitleContainer>

      <S.DeliveryInfoContainer>
        <S.DeliveryInfo>
          <span>
            <MapPin size={32} className="mapPin__icon" />
            Entrega em:
            <strong>
              {infoCep?.logradouro}, {residenceNumber},
            </strong>
            {infoCep?.bairro} - {infoCep?.localidade}, {infoCep?.uf}
          </span>
          <span>
            <Timer size={32} className="timer__icon" />
            Previsão de entrega: <strong>20 min - 30 min</strong>
          </span>
          <span>
            <CurrencyDollar size={32} className="dollar__icon" />
            Pagamento na entrega: <strong>{formOfPayment}</strong>
          </span>
        </S.DeliveryInfo>

        <img src={deliveryLogo} />
      </S.DeliveryInfoContainer>
    </S.SuccessContainer>
  );
}
