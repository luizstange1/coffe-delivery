import * as S from "./styles";
import backgroundImg from "../../assets/background-coffe-img.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../../services";

const createUserSchema = z.object({
  name: z.string().min(4),
  surname: z.string().min(4),
  email: z.string().email().min(8),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const formValues = watch();
  const isFormValid = Object.values(formValues).every(
    (value) =>
      value &&
      value.trim() !== "" &&
      formValues.password === formValues.confirmPassword
  );

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
            <S.RegisterDataInput
              placeholder="Digite seu sobrenome"
              type="text"
              {...register("surname")}
            />
            <S.RegisterDataInput
              placeholder="Digite seu email"
              type="email"
              {...register("email")}
            />
            <S.RegisterDataInput
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
            />
            <S.RegisterDataInput
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirmPassword")}
            />
          </S.InputWrapper>

          <S.ButtonWrapper>
            <S.Button type="submit" disabled={!isFormValid}>
              Cadastrar
            </S.Button>
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
