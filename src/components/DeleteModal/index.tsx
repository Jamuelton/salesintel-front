import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Button } from "../Button";
import { DeleteProduct } from "../../services/productServices";
import Cookies from "js-cookie";
import { successNotification, warningNotification } from "../Notification";

interface DeleteModalInterface {
  open?: boolean;
  onCancel?: () => void;
  deleteFunction?: () => void | undefined;
  headerText?: string;
  id: number;
}

export const DeleteModal: React.FC<DeleteModalInterface> = ({
  open,
  onCancel,
  headerText,
  id,
}) => {
  const token = Cookies.get("token") || "";

  const deleteProduct = async (id: number) => {
    try {
      const response = await DeleteProduct(
        token != undefined ? token : "",
        String(id)
      );
      if (response?.status == 204) {
        successNotification("Deletado com sucesso");
        if (onCancel != undefined) {
          onCancel();
        }
      }
    } catch (error) {
      warningNotification("Erro ao deletar produto");
      console.log(error);
    }
  };

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
            buttonFunction={() => deleteProduct(id)}
          />
        </S.ModalButtonRow>,
      ]}
    ></Modal>
  );
};
