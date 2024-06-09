import { PencilSimple, Eye } from "@phosphor-icons/react";
import * as S from "./styles";

interface ProductListInterface {
  name?: string;
  price?: string;
  quantity?: string;
}

export const ProductList: React.FC<ProductListInterface> = ({
  name,
  price,
  quantity,
}) => {
  const truncateText = (text: string | undefined, maxLength: number) => {
    return text && text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text;
  };

  const truncatedName = truncateText(name, 12);
  return (
    <S.Container>
      <S.LabelArea>
        <label htmlFor="">{truncatedName}</label>
        <label htmlFor="">R$ {price}</label>
        <label htmlFor="">{quantity}</label>
      </S.LabelArea>
      <S.IconArea>
        <PencilSimple size={24} />
        <Eye size={24} />
      </S.IconArea>
    </S.Container>
  );
};
