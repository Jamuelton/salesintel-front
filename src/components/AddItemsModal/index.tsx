import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";

interface AddItemsModalInterface {
  open?: boolean;
  onCancel?: () => void;
}

export const AddItemsModal: React.FC<AddItemsModalInterface> = ({
  open,
  onCancel,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText="PRODUTO XX"
      footer={[
        <Button
          label="ADICIONAR"
          shape="round"
          color="#f5f6fa"
          secondColor="#244bc5"
          buttonFunction={() => console.log("Adicionado")}
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
            value="Arroz Jurandir"
          />
        </S.InputContainer>
        <S.InputContainer>
          <span>QUANTIDADE:</span>
          <Input placeholder="QUANTIDADE" type="number" color="#244bc5" />
        </S.InputContainer>
      </S.ModalForm>
    </Modal>
  );
};
