import * as S from "./styles";
import backgroundImg from "../../assets/background-coffe-img.svg";
import { NavLink } from "react-router-dom";

export function SignIn() {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>
          Bem vindo ao <br /> Coffe Delivery
        </S.Title>
        <img src={backgroundImg} />
      </S.TitleWrapper>

      <S.LoginWrapper>
        <span>Login</span>

        <S.InputWrapper>
          <S.LoginDataInput placeholder="Digite seu email" type="email" />
          <S.LoginDataInput placeholder="Digite sua senha" type="password" />
        </S.InputWrapper>

        <S.ButtonWrapper>
          <S.Button>Entrar</S.Button>
          <span>
            Ainda não possui uma conta?
            <NavLink to="/usuario/cadastro">Cadastre-se agora</NavLink>
          </span>
        </S.ButtonWrapper>
      </S.LoginWrapper>
    </S.Container>
  );
}
