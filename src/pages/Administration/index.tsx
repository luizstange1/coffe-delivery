import * as S from "./styles";
import { Header, AddProductModal } from "./components";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import { useProducts } from "../../hooks";
import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Product } from "../../contexts/CartContext/types";
import { deleteProduct } from "../../services";

export function Administration() {
  const [newProductModalIsOpen, setNewProductModalIsOpen] = useState(false);
  const { productsList, fetchProducts } = useProducts();

  function handleOpenNewProductModal() {
    setNewProductModalIsOpen(true);
  }

  async function handleDeleteProduct(product: Product) {
    await deleteProduct(product.id);
    fetchProducts();
  }

  return (
    <>
      <Header />

      {newProductModalIsOpen && (
        <AddProductModal
          setNewProductModalIsOpen={setNewProductModalIsOpen}
          onProductAdded={fetchProducts}
        />
      )}

      <S.Container isBlurred={newProductModalIsOpen}>
        <S.WrapperTitleAndAddNewProduct>
          <S.Title>Produtos</S.Title>
          <S.AddNewProductButton onClick={handleOpenNewProductModal}>
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
              <S.Th>Ações</S.Th>
            </S.Tr>
          </S.THead>

          <S.TBody>
            {productsList.map((product) => {
              const tagArray = product.tag.split(",").map((tag) => tag.trim());

              return (
                <S.Tr key={product.id}>
                  <S.Td>{product.name}</S.Td>
                  <S.Td>{product.details}</S.Td>
                  <S.Td>
                    {tagArray.map((tag, index) => (
                      <S.Tag key={index}>{tag}</S.Tag>
                    ))}
                  </S.Td>
                  <S.Td>{formatPrice(product.price)}</S.Td>
                  <S.Td>
                    <S.ImagePreview src={product.image_path} />
                  </S.Td>

                  <S.Td>
                    <S.DeleteProductButton
                      onClick={() => handleDeleteProduct(product)}
                    >
                      <Trash size={24} alt="Deletar produto" />
                    </S.DeleteProductButton>
                  </S.Td>
                </S.Tr>
              );
            })}
          </S.TBody>
        </S.Table>
      </S.Container>
    </>
  );
}
