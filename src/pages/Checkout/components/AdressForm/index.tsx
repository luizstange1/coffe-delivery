import { MapPinLine } from "@phosphor-icons/react";
import * as S from "./styles";
import { useSearchCep } from "../../hooks/useSearchCep";
import { useContext } from "react";
import { CartContext } from "../../../../contexts";

export function AdressForm() {
  const { cepInput, setCepInput } = useSearchCep();
  const { infoCep, residenceNumber, setResidenceNumber } =
    useContext(CartContext);

  function handleCepInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setCepInput(value);
    }
  }

  return (
    <S.Adress>
      <S.HeaderWrapping>
        <MapPinLine size={22} className="mapPinLine__icon" />
        <S.Header>
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </S.Header>
      </S.HeaderWrapping>

      <S.InputContainer>
        <S.InputWrapping>
          <S.CEPInput
            placeholder="CEP"
            value={cepInput}
            onChange={handleCepInputChange}
            maxLength={8}
            required
          />
          <S.StreetInput
            placeholder="Rua"
            maxLength={40}
            value={infoCep ? infoCep.logradouro : ""}
            required
          />
          <S.NumberInput
            placeholder="Número"
            maxLength={4}
            value={residenceNumber}
            onChange={(e) => setResidenceNumber(Number(e.target.value))}
          />
          <S.ComplementInput placeholder="Complemento" maxLength={40} />
          <S.NeighborhoodInput
            placeholder="Bairro"
            maxLength={40}
            value={infoCep ? infoCep.bairro : ""}
            required
          />
          <S.CityInput
            placeholder="Cidade"
            maxLength={20}
            value={infoCep ? infoCep.localidade : ""}
            required
          />
          <S.UFInput
            placeholder="UF"
            maxLength={2}
            value={infoCep ? infoCep.uf : ""}
            required
          />
        </S.InputWrapping>
      </S.InputContainer>
    </S.Adress>
  );
}
