import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts";

export function PaymentInfo() {
  const { setFormOfPayment } = useContext(CartContext);

  return (
    <S.Payment>
      <S.HeaderWrapping>
        <CurrencyDollar size={22} className="dolar__icon" />
        <S.Header>
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </S.Header>
      </S.HeaderWrapping>

      <S.ContainerPaymentMethod>
        <S.PaymentButton onClick={() => setFormOfPayment("Cartão de Crédito")}>
          <CreditCard size={22} className="creditCard__icon" />
          Cartão de Crédito
        </S.PaymentButton>
        <S.PaymentButton onClick={() => setFormOfPayment("Cartão de Débito")}>
          <Bank size={22} className="bank__icon" />
          Cartão de Débito
        </S.PaymentButton>
        <S.PaymentButton onClick={() => setFormOfPayment("Dinheiro")}>
          <Money size={22} className="money__icon" />
          Dinheiro
        </S.PaymentButton>
      </S.ContainerPaymentMethod>
    </S.Payment>
  );
}
