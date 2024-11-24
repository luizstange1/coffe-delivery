import * as S from "./styles";
import backgroundImg from "../../assets/background-coffe-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../../services";
import { createUserSchema, CreateUserSchema } from "./schema";

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  async function handleCreateUser(userData: CreateUserSchema) {
    try {
      await createUser(userData);
      navigate("/login");
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

      <S.RegisterWrapper>
        <span>Cadastre-se agora!</span>

        <form onSubmit={handleSubmit(handleCreateUser)}>
          <S.InputWrapper>
            <S.RegisterDataInput
              placeholder="Digite seu nome"
              type="text"
              {...register("name")}
            />

            {errors.name && (
              <S.WarningMessage>{errors.name.message}</S.WarningMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <S.RegisterDataInput
              placeholder="Digite seu sobrenome"
              type="text"
              {...register("surname")}
            />

            {errors.surname && (
              <S.WarningMessage>{errors.surname?.message}</S.WarningMessage>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.RegisterDataInput
              placeholder="Digite seu email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <S.WarningMessage>{errors.email?.message}</S.WarningMessage>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.RegisterDataInput
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />

            {errors.password && (
              <S.WarningMessage>{errors.password?.message}</S.WarningMessage>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.RegisterDataInput
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <S.WarningMessage>
                {errors.confirmPassword.message}
              </S.WarningMessage>
            )}
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.Button type="submit">Cadastrar</S.Button>
            <span>
              Já tem uma conta criada?
              <NavLink to="/login">Faça login agora</NavLink>
            </span>
          </S.ButtonWrapper>
        </form>
      </S.RegisterWrapper>
    </S.Container>
  );
}
