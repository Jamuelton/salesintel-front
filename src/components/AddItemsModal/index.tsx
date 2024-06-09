import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { AddItemsSchema } from "../../services/types/addItemsType";
import { AddProductInterface } from "../../services/types/addProductType";
import { UpdateProduct } from "../../services/productServices";
import Cookies from "js-cookie";
import { successNotification, warningNotification } from "../Notification";

interface AddItemsModalInterface {
  open?: boolean;
  onCancel?: () => void;
  product: AddProductInterface;
}

interface ErrorInterface {
  errorType: "" | "warning" | "error" | undefined;
  errorShow: boolean;
}

export const AddItemsModal: React.FC<AddItemsModalInterface> = ({
  open,
  onCancel,
  product,
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  const [errorquantity, setErrorQuantity] = useState<ErrorInterface>();

  const token = Cookies.get("token") || "";

  const handleChangeQuantity = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddItemsSchema.shape.quantity.parse(Number(value));
      setErrorQuantity({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorQuantity({ errorType: "error", errorShow: true });
    }
    setQuantity(Number(value));
  };

  const productData: AddProductInterface = {
    name: product.name,
    purchasePrice: product.purchasePrice,
    salePrice: product.salePrice,
    quantity: product.quantity + quantity,
    unit: product.unit,
    expiration: product.expiration,
    batch: product.batch,
    categoryId: product.categoryId,
    userId: product.userId,
  };

  const updateProduct = async (id: number) => {
    try {
      const response = await UpdateProduct(
        productData,
        token != undefined ? token : "",
        String(id)
      );
      if (response?.status == 200) {
        successNotification("Adicionado com sucesso");
        if (onCancel != undefined) {
          onCancel();
        }
      }
    } catch (error) {
      warningNotification("Erro ao adicionar produto");
    }
  };

  const submit = () => {
    if (quantity == undefined) {
      setErrorQuantity({ errorType: "error", errorShow: true });
    }

    if (errorquantity?.errorShow != true && quantity != 0) {
      updateProduct(product.id != undefined ? product.id : 0);
    } else {
      warningNotification("Insira caracteres válidos");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText={`ADICIONAR PRODUTO ${product.id}`}
      footer={[
        <Button
          label="ADICIONAR"
          shape="round"
          color="#f5f6fa"
          secondColor="#244bc5"
          buttonFunction={submit}
        />,
      ]}
    >
      <S.ModalForm>
        <S.InputContainer>
          <span>NOME:</span>
          <Input
            placeholder="NOME DO PRODUTO"
            color="#244bc5"
            disabled
            value={product.name}
          />
        </S.InputContainer>
        <S.InputContainer>
          <span>QUANTIDADE:</span>
          <Input
            placeholder="QUANTIDADE"
            type="number"
            color="#244bc5"
            min={1}
            step={1}
            status={errorquantity?.errorType}
            errorText={"Insira um valor maior que 0"}
            inputFunction={handleChangeQuantity}
          />
        </S.InputContainer>
      </S.ModalForm>
    </Modal>
  );
};
