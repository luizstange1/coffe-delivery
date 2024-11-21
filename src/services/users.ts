import axios from "axios";

interface userDataProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export async function getUser() {
  try {
    const response = await axios.get("http://localhost:3333/usuario");

    return response;
  } catch (error) {}
}

export async function createUser(userData: userDataProps) {
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
