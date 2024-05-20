import { PencilSimple, Eye } from "@phosphor-icons/react";
import * as S from "./styles";

interface ProductListInterface {
  name: string;
  price: string;
  quantity: string;
}

export const ProductList: React.FC<ProductListInterface> = ({
  name,
  price,
  quantity,
}) => {
  return (
    <S.Container>
      <label htmlFor="">{name}</label>
      <label htmlFor="">R$ {price}</label>
      <label htmlFor="">{quantity}</label>
      <PencilSimple size={24} />
      <Eye size={24} />
    </S.Container>
  );
};
