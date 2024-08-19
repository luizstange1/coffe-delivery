import * as S from "./styles";
import { Header } from "./components";
import { PlusCircle } from "@phosphor-icons/react";
import { useProducts } from "../../hooks";

export function Administration() {
  const { productsList } = useProducts();

  return (
    <>
      <Header />

      <S.Container>
        <S.WrapperTitleAndAddNewProduct>
          <S.Title>Produtos</S.Title>
          <S.AddNewProductButton>
            <PlusCircle size={24} />
            Novo Produto
          </S.AddNewProductButton>
        </S.WrapperTitleAndAddNewProduct>

        <S.Table>
          <S.THead>
            <S.Tr>
              <S.Th>Nome</S.Th>
              <S.Th>Detalhes</S.Th>
              <S.Th>Tag</S.Th>
              <S.Th>Preço</S.Th>
              <S.Th>Imagem</S.Th>
            </S.Tr>
          </S.THead>

          <S.TBody>
            {productsList.map((product) => (
              <S.Tr>
                <S.Td>{product.name}</S.Td>
                <S.Td>{product.details}</S.Td>
                <S.Td>
                  {product.tag.map((item) => (
                    <S.Tag>{item}</S.Tag>
                  ))}
                </S.Td>
                <S.Td>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </S.Td>
                <S.Td>
                  <S.ImagePreview src={product.image_path} />
                </S.Td>
              </S.Tr>
            ))}
          </S.TBody>
        </S.Table>
      </S.Container>
    </>
  );
}
