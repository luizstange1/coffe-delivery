import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postProducts } from "../../../../services/products";
import * as S from "./styles";

interface ProductApi {
  name: string;
  details: string;
  tag: string;
  price: number;
  image_path?: any;
}

type ModalProps = {
  setNewProductModalIsOpen: (props: boolean) => void;
  onProductAdded: () => void;
};

type CreateProductSchema = z.infer<typeof createProductSchema>;

const createProductSchema = z.object({
  name: z.string().min(4),
  details: z.string().min(4),
  tag: z.string().min(4),
  price: z.coerce.number().min(1),
  image_path: z.any(),
});

export function AddProductModal({
  setNewProductModalIsOpen,
  onProductAdded,
}: ModalProps) {
  const { register, handleSubmit } = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
  });

  async function handleCreateProduct(data: ProductApi) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("details", data.details);
    formData.append("tag", data.tag);
    formData.append("price", data.price.toFixed(2));
    formData.append("file", data.image_path[0]);

    try {
      await postProducts(formData);
      onProductAdded();
      handleCloseNewProductModal();
    } catch (error) {
      console.log(error);
    }
  }

  function handleCloseNewProductModal() {
    setNewProductModalIsOpen(false);
  }

  return (
    <S.Container>
      <S.Title>Preencha as informações para criar seu novo produto</S.Title>

      <S.CloseModalButton onClick={handleCloseNewProductModal}>
        <X size={24} />
      </S.CloseModalButton>

      <S.InputWrapping>
        <S.Form onSubmit={handleSubmit(handleCreateProduct)}>
          <S.Input placeholder="Nome" {...register("name")} />
          <S.Input placeholder="Detalhes" {...register("details")} />
          <S.Input
            placeholder="Tags (separe com uma vírgula as tags)"
            {...register("tag")}
          />
          <S.Input
            type="number"
            step=".01"
            placeholder="Preço (Ex: 9.90)"
            {...register("price")}
          />
          <S.TargetingText>
            Abaixo, selecione a imagem para seu produto
          </S.TargetingText>
          <S.FileInput
            type="file"
            accept="image/*"
            placeholder="Escolha a imagem para seu produto"
            {...register("image_path")}
          />
          <S.CreateProductButton type="submit">
            Criar Produto
          </S.CreateProductButton>
        </S.Form>
      </S.InputWrapping>
    </S.Container>
  );
}
