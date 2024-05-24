import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { AddItemsSchema } from "../../services/types/addItemsType";

interface AddItemsModalInterface {
  open?: boolean;
  onCancel?: () => void;
  id?: number;
  productName?: string;
}

interface ErrorInterface {
  errorType: "" | "warning" | "error" | undefined;
  errorShow: boolean;
}

export const AddItemsModal: React.FC<AddItemsModalInterface> = ({
  open,
  onCancel,
  id,
  productName,
}) => {
  const [quantity, setQuantity] = useState<number>();

  const [errorquantity, setErrorQuantity] = useState<ErrorInterface>();

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

  const submit = () => {
    if (quantity == undefined) {
      setErrorQuantity({ errorType: "error", errorShow: true });
    }

    if (errorquantity?.errorShow != true && quantity != 0) {
      const json = {
        quantity: quantity,
      };

      console.log(json);

      if (onCancel != undefined) {
        onCancel();
      }

      console.log("ADICIONADO COM SUCESSO");
    } else {
      console.log("Tá com erro");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText={`PRODUTO ${id}`}
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
            value={productName}
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
