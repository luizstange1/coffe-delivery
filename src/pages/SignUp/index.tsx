import * as S from "./styles";
import backgroundImg from "../../assets/background-coffe-img.svg";
import { NavLink } from "react-router-dom";

export function SignUp() {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>
          Bem vindo ao <br /> Coffe Delivery
        </S.Title>
        <img src={backgroundImg} />
      </S.TitleWrapper>

      <S.RegisterWrapper>
        <span>Cadastre-se agora!</span>

        <S.InputWrapper>
          <S.RegisterDataInput placeholder="Digite seu nome" type="text" />
          <S.RegisterDataInput placeholder="Digite seu sobrenome" type="text" />
          <S.RegisterDataInput placeholder="Digite seu email" type="email" />
          <S.RegisterDataInput placeholder="Digite sua senha" type="password" />
          <S.RegisterDataInput
            placeholder="Confirme sua senha"
            type="password"
          />
        </S.InputWrapper>

        <S.ButtonWrapper>
          <S.Button>Cadastrar</S.Button>
          <span>
            Já tem uma conta criada?
            <NavLink to="/login">Faça login agora</NavLink>
          </span>
        </S.ButtonWrapper>
      </S.RegisterWrapper>
    </S.Container>
  );
}
