import { useContext } from "react";
import { CartContext } from "../../../../contexts";
import { formatPrice } from "../../../../utils/formatPrice";
import * as S from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Product } from "../../../../contexts/CartContext/types";
import { NavLink } from "react-router-dom";

type CartProductsProps = {
  setShowAlertModal: (value: boolean) => void;
};

export function CartProducts({ setShowAlertModal }: CartProductsProps) {
  const {
    cartProducts,
    removeToCart,
    addToCart,
    setCartProducts,
    formOfPayment,
    residenceNumber,
    infoCep,
    setOrderSummary,
    setOrderConfirmed,
  } = useContext(CartContext);

  const sumOfProductValue = cartProducts
    .map((product) => product.quantity * Number(product.price))
    .reduce((accumulator, value) => accumulator + value, 0);

  const sumOfProductValuesWithDeliveryValue = sumOfProductValue + 3.5;

  function handleIncreaseProductQuantity(product: Product) {
    addToCart(product);
  }

  function handleDecreaseProductQuantity(product: Product) {
    removeToCart(product);
  }

  function handleRemoveProductOfCart(product: Product) {
    const updatedProducts = cartProducts.filter(
      (item) => item.id !== product.id
    );
    setCartProducts(updatedProducts);
  }

  function handleCheckIfTheInformationIsCompleted(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (formOfPayment === "" || residenceNumber === undefined || !infoCep) {
      event.preventDefault();
      setShowAlertModal(true);
    }
  }

  function handleCreateOrderSummary() {
    setOrderSummary({
      cartProducts,
      formOfPayment,
      infoCep,
      residenceNumber,
    });
    setOrderConfirmed(true);
  }

  if (cartProducts.length === 0) return null;

  return (
    <>
      {cartProducts.map((product) => (
        <S.Products key={product.id}>
          <S.ProductImg src={product.image_path} />

          <S.ContainerNameAndPriceProduct>
            <S.NameAndPriceWrapping>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>
            </S.NameAndPriceWrapping>

            <S.ButtonWrapping>
              <S.SelectQuantityProducts>
                <S.DecreaseButton
                  onClick={() => handleDecreaseProductQuantity(product)}
                >
                  -
                </S.DecreaseButton>
                <span>{product.quantity}</span>
                <S.IncreaseButton
                  onClick={() => handleIncreaseProductQuantity(product)}
                >
                  +
                </S.IncreaseButton>
              </S.SelectQuantityProducts>

              <S.RemoveProductButton
                onClick={() => handleRemoveProductOfCart(product)}
              >
                <Trash size={22} className="trash__icon" />
                Remover
              </S.RemoveProductButton>
            </S.ButtonWrapping>
          </S.ContainerNameAndPriceProduct>
        </S.Products>
      ))}

      <S.WrappingFinalCartValues>
        <S.PriceText>
          <span>Total de itens</span>
          <span>Entrega</span>
          <span>Total</span>
        </S.PriceText>

        <S.Values>
          <span>{formatPrice(sumOfProductValue)}</span>
          <span>R$ 3,50</span>
          <span>{formatPrice(sumOfProductValuesWithDeliveryValue)}</span>
        </S.Values>
      </S.WrappingFinalCartValues>

      <S.WrappingButtonsToConfirmPurchaseAndReturnToMenu>
        <NavLink to="/sucesso" onClick={handleCheckIfTheInformationIsCompleted}>
          <S.ConfirmOrderButton onClick={handleCreateOrderSummary}>
            Confirmar Pedido
          </S.ConfirmOrderButton>
        </NavLink>

        <NavLink to="/">
          <S.KeepBuying>Continuar comprando</S.KeepBuying>
        </NavLink>
      </S.WrappingButtonsToConfirmPurchaseAndReturnToMenu>
    </>
  );
}
