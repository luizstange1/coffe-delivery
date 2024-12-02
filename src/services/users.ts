import axios, { AxiosError } from "axios";

interface newUserDataProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface userLoginProps {
  email: string;
  password: string;
}

export async function userLogin(loginData: userLoginProps) {
  try {
    const response = await axios.post(
      "http://localhost:3333/auth/login",
      loginData
    );

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.id);
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status;

      if (status === 404) {
        throw new Error("Usuário não encontrado");
      }
      if (status === 401) {
        throw new Error("Senha incorreta");
      }
    } else {
      throw new Error("Ocorreu um erro inesperado");
    }
  }
}

export async function getUserData(id: string) {
  try {
    const response = await axios.get(`http://localhost:3333/user/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userData: newUserDataProps) {
  try {
    const response = axios.post(
      "http://localhost:3333/user/register",
      userData
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
