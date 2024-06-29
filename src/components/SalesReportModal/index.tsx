import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import * as S from "./styles";
import * as XLSX from "xlsx";

interface TableData {
  key: string;
  id: string;
  name: string;
  saleValue: string;
  quantity: string;
  saleDate: string;
}

interface SalesReportModalInterface {
  open?: boolean;
  onCancel?: () => void;
  data?: TableData[];
}

export const SalesReportModal: React.FC<SalesReportModalInterface> = ({
  open,
  onCancel,
  data,
}) => {
  const [initialDate, setInitialDate] = useState<string>();
  const [finalDate, setFinalDate] = useState<string>();

  //Remover depois
  function parseDate(date: string) {
    const [day, month, year] = date.split("/");
    return new Date(`${year}-${month}-${day}`);
  }

  const submit = () => {
    handleExport();

    if (onCancel != undefined) {
      onCancel();
    }
  };

  const handleExport = () => {
    if (data != undefined) {
      const filteredData = data.filter((item) => {
        const saleDate = parseDate(item.saleDate);
        if (initialDate != undefined && finalDate != undefined) {
          return (
            saleDate >= new Date(initialDate) && saleDate <= new Date(finalDate)
          );
        } else {
          return data;
        }
      });

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(filteredData);
      const colWidths = [
        { wch: 4 },
        { wch: 3 },
        { wch: 50 },
        { wch: 15 },
        { wch: 11 },
        { wch: 14 },
      ];

      ws["!cols"] = colWidths;

      XLSX.utils.book_append_sheet(wb, ws, "Vendas");
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            "Key",
            "Id",
            "Nome do Produto",
            "Valor da Venda",
            "Quantidade",
            "Data da venda",
          ],
        ],
        { origin: "A1" }
      );
      XLSX.writeFile(wb, `vendas.xlsx`);
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
