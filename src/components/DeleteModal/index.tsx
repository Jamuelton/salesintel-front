import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Button } from "../Button";

interface DeleteModalInterface {
  open?: boolean;
  onCancel?: () => void;
  id?: number;
  headerText?: string;
}

export const DeleteModal: React.FC<DeleteModalInterface> = ({
  open,
  onCancel,
  id,
  headerText,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText={headerText}
      footer={[
        <S.ModalButtonRow>
          <Button
            label="CANCELAR"
            shape="round"
            color="#f5f6fa"
            secondColor="#244bc5"
            buttonFunction={onCancel}
          />
          <Button
            label="DELETAR"
            shape="round"
            color="#f5f6fa"
            secondColor="#C52D24"
            buttonFunction={() => console.log("Adicionado")}
          />
        </S.ModalButtonRow>,
      ]}
    ></Modal>
  );
};
