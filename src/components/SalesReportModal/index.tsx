import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import * as S from "./styles";

interface SalesReportModalInterface {
  open?: boolean;
  onCancel?: () => void;
}

export const SalesReportModal: React.FC<SalesReportModalInterface> = ({
  open,
  onCancel,
}) => {
  const [initialDate, setInitialDate] = useState<string>();
  const [finalDate, setFinalDate] = useState<string>();
  const submit = () => {
    const json = {
      initialDate: initialDate,
      finalDate: finalDate,
    };

    console.log(json);

    if (onCancel != undefined) {
      onCancel();
    }
  };

  const handleChangeInitialDate = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setInitialDate(value);
  };

  const handleChangeFinalDate = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setFinalDate(value);
  };

  return (
    <Modal
      headerText="GERAR RELATÓRIO"
      footer={[
        <Button
          label="GERAR"
          shape="round"
          color="#f5f6fa"
          secondColor="#244bc5"
          buttonFunction={submit}
        />,
      ]}
      open={open}
      onCancel={onCancel}
    >
      <S.ModalForm>
        <S.Row>
          <S.InputContainer>
            <span>DATA INICIAL:</span>
            <Input
              color="#244bc5"
              inputFunction={handleChangeInitialDate}
              // status={errorName?.errorType}
              errorText={
                "O nome do produto precisa ter entre 2 e 60 caracteres."
              }
              type="date"
            />
          </S.InputContainer>
          <S.InputContainer>
            <span>DATA FINAL:</span>
            <Input
              type="date"
              color="#244bc5"
              //   status={errorexpirationDate?.errorType}
              errorText={
                "A data de validade não pode ser anterior ao dia atual"
              }
              inputFunction={handleChangeFinalDate}
            />
          </S.InputContainer>
        </S.Row>
      </S.ModalForm>
    </Modal>
  );
};
