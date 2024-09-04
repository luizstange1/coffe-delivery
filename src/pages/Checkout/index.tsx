import { ShoppingCart } from "@phosphor-icons/react";
import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Alert } from "@mui/material";
import { CartContext } from "../../contexts";
import { AdressForm, PaymentInfo, CartProducts } from "./components";

export function Checkout() {
  const { cartProducts } = useContext(CartContext);

  const [showAlertModal, setShowAlertModal] = useState(false);

  useEffect(() => {
    showAlertModal && setTimeout(() => setShowAlertModal(false), 3000);
  }, [showAlertModal]);

  return (
    <S.CheckoutContainer>
      <S.AdressAndPaymentContainer>
        {showAlertModal && (
          <Alert severity="error" className="alert__modal">
            Existem informações necessárias que ainda não foram preenchidas
          </Alert>
        )}

        <S.Subtitle>Complete seu pedido</S.Subtitle>

        <AdressForm />
        <PaymentInfo />
      </S.AdressAndPaymentContainer>

      <S.ContainerCartItems>
        <S.Subtitle>Cafés selecionados</S.Subtitle>
        <S.ContainerProducts>
          {cartProducts.length > 0 ? (
            <CartProducts setShowAlertModal={setShowAlertModal} />
          ) : (
            <S.EmptyCartMessage>
              <ShoppingCart size={48} />
              <span>Seu carrinho está vazio</span>
              <NavLink to="/">
                <S.BackToMenu>Voltar para o cardápio</S.BackToMenu>
              </NavLink>
            </S.EmptyCartMessage>
          )}
        </S.ContainerProducts>
      </S.ContainerCartItems>
    </S.CheckoutContainer>
  );
}
