import axios from "axios";

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

    return response.data;
  } catch (error) {}
}

export async function createUser(userData: newUserDataProps) {
  try {
    const newUser = axios.post(
      "http://localhost:3333/usuario/cadastro",
      userData
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
