import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";

interface AddProductModalInterface {
  open?: boolean;
  onCancel?: () => void;
}

export const AddProductModal: React.FC<AddProductModalInterface> = ({
  open,
  onCancel,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText="ADICIONAR PRODUTO"
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
          <Input placeholder="NOME DO PRODUTO" color="#244bc5" />
        </S.InputContainer>
        <S.Row>
          <S.InputContainer>
            <span>VALIDADE:</span>
            <Input placeholder="VALIDADE" type="date" color="#244bc5" />
          </S.InputContainer>
          <S.InputContainer>
            <span>UNIDADE:</span>
            <S.CustomSelect
              placeholder="UNIDADE"
              options={[
                {
                  value: "un",
                  label: "UN",
                },
                {
                  value: "kg",
                  label: "KG",
                },
                {
                  value: "lt",
                  label: "LT",
                },
              ]}
            />
          </S.InputContainer>
        </S.Row>
        <S.InputContainer>
          <span>CATEGORIA:</span>
          <S.CustomSelect
            placeholder="CATEGORIA"
            showSearch
            options={[
              {
                value: "alimentos",
                label: "Alimentos",
              },
              {
                value: "limpeza",
                label: "Produtos de Limpeza",
              },
              {
                value: "higiene",
                label: "Produtos de Higiene",
              },
            ]}
          />
        </S.InputContainer>
        <S.Row>
          <S.InputContainer>
            <span>LOTE:</span>
            <Input placeholder="LOTE" type="number" color="#244bc5" />
          </S.InputContainer>
          <S.InputContainer>
            <span>QUANTIDADE:</span>
            <Input placeholder="QUANTIDADE" type="number" color="#244bc5" />
          </S.InputContainer>
        </S.Row>
        <S.Row>
          <S.InputContainer>
            <span>PREÇO DE COMPRA:</span>
            <Input placeholder="R$00,00" type="number" color="#244bc5" />
          </S.InputContainer>
          <S.InputContainer>
            <span>PREÇO DE VENDA:</span>
            <Input placeholder="R$00,00" type="number" color="#244bc5" />
          </S.InputContainer>
        </S.Row>
      </S.ModalForm>
    </Modal>
  );
};
