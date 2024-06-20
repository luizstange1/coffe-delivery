import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
  ShoppingCart,
} from "@phosphor-icons/react";

import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Alert } from "@mui/material";
import { cepApi } from "../../services";
import { CartContext } from "../../contexts";
import { InfoCep, Product } from "../../contexts/CartContext/types";

export function Checkout() {
  const {
    cartProducts,
    addToCart,
    removeToCart,
    setCartProducts,
    infoCep,
    setInfoCep,
    formOfPayment,
    setFormOfPayment,
    residenceNumber,
    setResidenceNumber,
    setOrderSummary,
    setOrderConfirmed,
  } = useContext(CartContext);

  const [cepInput, setCepInput] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);

  const sumOfProductValue = cartProducts
    .map((product) => product.quantity * Number(product.price))
    .reduce((acummulator, value) => acummulator + value, 0);

  const sumOfProductValuesWithDeliveryValue = sumOfProductValue + 3.5;

  function handleRemoveProductOfCart(product: Product) {
    const removeProduct = cartProducts.filter((item) => {
      return item.id !== product.id;
    });

    setCartProducts(removeProduct);
  }

  async function handleSearchCep() {
    if (cepInput.length === 8) {
      try {
        const response = await cepApi.get<InfoCep>(`${cepInput}/json/`);
        setInfoCep(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleCepInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setCepInput(value);
    }
  }

  useEffect(() => {
    handleSearchCep();
  }, [cepInput.length === 8]);

  useEffect(() => {
    showAlertModal === true && setTimeout(() => setShowAlertModal(false), 5000);
  }, [showAlertModal]);

  function handleCheckIfTheInformationIsCompleted(event: any) {
    if (
      formOfPayment === "" ||
      residenceNumber === undefined ||
      cepInput.length < 8
    ) {
      event.preventDefault();
      setShowAlertModal(true);
    }
  }

  function handleCreateOrderSummary() {
    setOrderSummary({
      cartProducts: cartProducts,
      formOfPayment: formOfPayment,
      infoCep: infoCep,
      residenceNumber: residenceNumber,
    });

    setOrderConfirmed(true);
  }

  return (
    <S.CheckoutContainer>
      <S.AdressAndPaymentContainer>
        {showAlertModal && (
          <Alert severity="error" className="alert__modal">
            Existem informações necessárias que ainda não foram preenchidas
          </Alert>
        )}

        <S.Subtitle>Complete seu pedido</S.Subtitle>

        <S.Adress>
          <S.HeaderWrapping>
            <MapPinLine size={22} className="mapPinLine__icon" />
            <S.Header>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </S.Header>
          </S.HeaderWrapping>

          <S.InputContainer>
            <S.InputWrapping>
              <S.CEPInput
                placeholder="CEP"
                value={cepInput}
                onChange={handleCepInputChange}
                maxLength={8}
                required
              />
              <S.StreetInput
                placeholder="Rua"
                maxLength={40}
                value={infoCep ? infoCep.logradouro : ""}
                required
              />
              <S.NumberInput
                placeholder="Número"
                maxLength={4}
                value={residenceNumber}
                onChange={(e) => setResidenceNumber(Number(e.target.value))}
              />
              <S.ComplementInput placeholder="Complemento" maxLength={40} />
              <S.NeighborhoodInput
                placeholder="Bairro"
                maxLength={40}
                value={infoCep ? infoCep.bairro : ""}
                required
              />
              <S.CityInput
                placeholder="Cidade"
                maxLength={20}
                value={infoCep ? infoCep.localidade : ""}
                required
              />
              <S.UFInput
                placeholder="UF"
                maxLength={2}
                value={infoCep ? infoCep.uf : ""}
                required
              />
            </S.InputWrapping>
          </S.InputContainer>
        </S.Adress>

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
            <S.PaymentButton
              onClick={() => setFormOfPayment("Cartão de Crédito")}
            >
              <CreditCard size={22} className="creditCard__icon" />
              Cartão de Crédito
            </S.PaymentButton>
            <S.PaymentButton
              onClick={() => setFormOfPayment("Cartão de Débito")}
            >
              <Bank size={22} className="bank__icon" />
              Cartão de Débito
            </S.PaymentButton>
            <S.PaymentButton onClick={() => setFormOfPayment("Dinheiro")}>
              <Money size={22} className="money__icon" />
              Dinheiro
            </S.PaymentButton>
          </S.ContainerPaymentMethod>
        </S.Payment>
      </S.AdressAndPaymentContainer>

      <S.ContainerCartItems>
        <S.Subtitle>Cafés selecionados</S.Subtitle>
        <S.ContainerProducts>
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => {
              return (
                <S.Products key={product.id}>
                  <S.ProductImg src={product.image} />

                  <S.ContainerNameAndPriceProduct>
                    <S.NameAndPriceWrapping>
                      <S.ProductName>{product.name}</S.ProductName>
                      <S.ProductPrice>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </S.ProductPrice>
                    </S.NameAndPriceWrapping>

                    <S.ButtonWrapping>
                      <S.SelectQuantityProducts>
                        <S.DecreaseButton onClick={() => removeToCart(product)}>
                          -
                        </S.DecreaseButton>
                        <span>{product.quantity}</span>
                        <S.IncreaseButton onClick={() => addToCart(product)}>
                          +
                        </S.IncreaseButton>
                      </S.SelectQuantityProducts>

                      <S.RemoveProdutButton
                        onClick={() => handleRemoveProductOfCart(product)}
                      >
                        <Trash size={22} className="trash__icon" />
                        Remover
                      </S.RemoveProdutButton>
                    </S.ButtonWrapping>
                  </S.ContainerNameAndPriceProduct>
                </S.Products>
              );
            })
          ) : (
            <S.EmptyCartMessage>
              <ShoppingCart size={48} />
              <span>Seu carrinho está vazio</span>
              <NavLink to="/">
                <S.BackToMenu>Voltar para o cardápio</S.BackToMenu>
              </NavLink>
            </S.EmptyCartMessage>
          )}

          {cartProducts.length > 0 && (
            <>
              <S.WrappingFinalCartValues>
                <S.PriceText>
                  <span>Total de itens</span>
                  <span>Entrega</span>
                  <span>Total</span>
                </S.PriceText>

                <S.Values>
                  <span>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(sumOfProductValue)}
                  </span>
                  <span>R$ 3,50</span>
                  <span>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(sumOfProductValuesWithDeliveryValue)}
                  </span>
                </S.Values>
              </S.WrappingFinalCartValues>

              <S.WrappingButtonsToConfirmPurchaseAndReturnToMenu>
                <NavLink
                  to="/sucesso"
                  onClick={handleCheckIfTheInformationIsCompleted}
                >
                  <S.ConfirmOrderButton onClick={handleCreateOrderSummary}>
                    Confirmar Pedido
                  </S.ConfirmOrderButton>
                </NavLink>

                <NavLink to="/">
                  <S.KeepBuying>Continuar comprando</S.KeepBuying>
                </NavLink>
              </S.WrappingButtonsToConfirmPurchaseAndReturnToMenu>
            </>
          )}
        </S.ContainerProducts>
      </S.ContainerCartItems>
    </S.CheckoutContainer>
  );
}
