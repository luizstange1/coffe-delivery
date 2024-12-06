import * as S from "./styles";
import logoCoffeDelivery from "../../assets/coffe-delivery-logo.svg";
import { MapPin, ShoppingCart, UserList, SignOut } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts";
import { userUserData } from "../../hooks";

export function Header() {
  const { cartProducts } = useContext(CartContext);
  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const { userIsAdministrator } = userUserData();
  const loginVerification = localStorage.getItem("userId");

  function handleLogout() {
    localStorage.removeItem("userId"),
      localStorage.removeItem("token"),
      location.reload();
  }

  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <S.Logo src={logoCoffeDelivery} alt="" title="Retornar ao cardápio" />
      </NavLink>

      <S.ShoppingCart>
        <S.Location>
          <MapPin size={22} weight="fill" />
          <span>Tubarão, SC</span>
        </S.Location>

        <NavLink to="/checkout">
          <S.CartLogo title="Ir para o carrinho">
            <ShoppingCart size={22} weight="fill" />
            {cartProducts.length > 0 && <span>{totalProducts}</span>}
          </S.CartLogo>
        </NavLink>

        {userIsAdministrator && (
          <NavLink to="/admin" className="admin__button">
            <UserList size={22} />
            Administrador
          </NavLink>
        )}

        {!loginVerification ? (
          <NavLink to="/login" className="login__button">
            Entrar
          </NavLink>
        ) : (
          <S.LogoutButton onClick={handleLogout}>
            <SignOut size={22} />
            Sair
          </S.LogoutButton>
        )}
      </S.ShoppingCart>
    </S.HeaderContainer>
  );
}
