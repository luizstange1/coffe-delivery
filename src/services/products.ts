import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get("http://localhost:3333/products");

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function postProducts(procuct: FormData) {
  try {
    const response = await axios.post(
      "http://localhost:3333/products",
      procuct
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
