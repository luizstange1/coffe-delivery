import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../contexts";
import { useProducts } from "../../../../hooks";
import * as S from "./styles";

export function Menu() {
  const { cartProducts, addToCart, removeToCart } = useContext(CartContext);
  const { productsList } = useProducts();

  return (
    <S.MenuContainer>
      {productsList.map((product) => {
        const cartProduct = cartProducts.find((item) => item.id === product.id);
        const quantity = cartProduct ? cartProduct.quantity : 0;

        return (
          <S.ProductContainer key={product.id}>
            <S.ProductImage src={product.image_path} />
            <S.ProductInformationContainer>
              <S.TagWrapping>
                {product.tag?.map((tag, index) => {
                  return <S.Tag key={index}>{tag}</S.Tag>;
                })}
              </S.TagWrapping>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductDetails>{product.details}</S.ProductDetails>
            </S.ProductInformationContainer>

            <S.PriceContainer>
              <S.Price>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </S.Price>

              <S.ContainerAddToCart>
                <S.SelectQuantityProducts>
                  <S.DecreaseButton onClick={() => removeToCart(product)}>
                    -
                  </S.DecreaseButton>
                  <span>{quantity}</span>
                  <S.IncreaseButton onClick={() => addToCart(product)}>
                    +
                  </S.IncreaseButton>
                </S.SelectQuantityProducts>
              </S.ContainerAddToCart>
            </S.PriceContainer>
          </S.ProductContainer>
        );
      })}

      <NavLink to="/checkout">
        <S.GoToCartButton>
          <ShoppingCartSimple size={24} weight="fill" />
          Ir para o carrinho
        </S.GoToCartButton>
      </NavLink>
    </S.MenuContainer>
  );
}
