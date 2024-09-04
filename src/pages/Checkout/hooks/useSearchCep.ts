import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts";
import { cepAPI } from "../../../services";
import { InfoCep } from "../../../contexts/CartContext/types";

export function useSearchCep() {
  const { setInfoCep } = useContext(CartContext);
  const [cepInput, setCepInput] = useState("");

  async function searchCep() {
    try {
      const response = await cepAPI.get<InfoCep>(`${cepInput}/json/`);
      setInfoCep(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (cepInput.length === 8) {
      searchCep();
    }
  }, [cepInput]);

  return { cepInput, setCepInput };
}
