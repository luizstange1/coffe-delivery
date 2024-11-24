import * as S from "./styles";
import backgroundImg from "../../assets/background-coffe-img.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "../../services";
import { loginDataSchema, LoginDataSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataSchema>({
    resolver: zodResolver(loginDataSchema),
  });

  async function handleUserLogin(userLoginData: LoginDataSchema) {
    try {
      await userLogin(userLoginData);
    } catch (error) {
      console.log(error);
    }
  }

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
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <S.InputWrapper>
            <S.LoginDataInput
              placeholder="Digite seu email"
              type="email"
              {...register("email")}
            />

            {errors.email && (
              <S.WarningMessage>{errors.email.message}</S.WarningMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            {" "}
            <S.LoginDataInput
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <S.WarningMessage>{errors.password.message}</S.WarningMessage>
            )}
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.Button type="submit">Entrar</S.Button>
            <span>
              Ainda não possui uma conta?
              <NavLink to="/usuario/cadastro">Cadastre-se agora</NavLink>
            </span>
          </S.ButtonWrapper>
        </form>
      </S.LoginWrapper>
    </S.Container>
  );
}
