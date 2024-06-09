import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Input } from "../../components/Input";
import {
  DotsThreeCircle,
  MagnifyingGlass,
  XCircle,
} from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { DeleteModal } from "../../components/DeleteModal";
import { SalesReportModal } from "../../components/SalesReportModal";

interface TableData {
  key: string;
  id: string;
  name: string;
  saleValue: string;
  quantity: string;
  saleDate: string;
}

export function Sales() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [isSalesReportModalOpen, setIsSalesReportModalOpen] = useState(false);

  const handleChangeSearch = (e: { target: { value: string } }) => {
    const { value } = e.target;

    setSearchTerm(value);
  };

  const salesReportModal = () => {
    setIsSalesReportModalOpen(true);
  };

  const closeSalesReportModal = () => {
    setIsSalesReportModalOpen(false);
  };

  const deleteItem = (id: number) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const columns: ColumnsType<TableData> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "PRODUTO",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "VALOR TOTAL",
      dataIndex: "saleValue",
      key: "saleValue",
      render: (value) => `R$ ${value.replace(".", ",")}`,
    },
    {
      title: "QNTD. TOTAL",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "DATA",
      dataIndex: "saleDate",
      key: "saleDate",
    },
    {
      align: "center",
      render: (record) => (
        <>
          <DotsThreeCircle
            size={24}
            weight="bold"
            color="#244BC5"
            // onClick={() => addItems(record.id, record.name)}
            cursor={"pointer"}
            alt="Visualizar venda"
          />
          <XCircle
            size={24}
            weight="bold"
            color="#C52D24"
            onClick={() => deleteItem(record.id)}
            cursor={"pointer"}
            alt="Deletar venda"
          />
        </>
      ),
    },
  ];

  const data: TableData[] = [
    {
      key: "1",
      id: "1",
      name: "Arroz Jurandir",
      saleValue: "100.5",
      quantity: "350(UN)",
      saleDate: "10/05/2024",
    },
    {
      key: "2",
      id: "2",
      name: "Feijão Carioca",
      saleValue: "80.75",
      quantity: "200(UN)",
      saleDate: "15/05/2024",
    },
    {
      key: "3",
      id: "3",
      name: "Macarrão Parafuso",
      saleValue: "65.0",
      quantity: "150(UN)",
      saleDate: "20/05/2024",
    },
    {
      key: "4",
      id: "4",
      name: "Óleo de Soja",
      saleValue: "120.4",
      quantity: "100(UN)",
      saleDate: "25/05/2024",
    },
    {
      key: "5",
      id: "5",
      name: "Açúcar Refinado",
      saleValue: "95.3",
      quantity: "250(UN)",
      saleDate: "30/05/2024",
    },
    {
      key: "6",
      id: "6",
      name: "Café em Pó",
      saleValue: "75.2",
      quantity: "300(UN)",
      saleDate: "05/06/2024",
    },
    {
      key: "7",
      id: "7",
      name: "Farinha de Trigo",
      saleValue: "55.1",
      quantity: "180(UN)",
      saleDate: "10/06/2024",
    },
    {
      key: "8",
      id: "8",
      name: "Leite Condensado",
      saleValue: "110.9",
      quantity: "120(UN)",
      saleDate: "15/06/2024",
    },
    {
      key: "9",
      id: "9",
      name: "Margarina",
      saleValue: "45.5",
      quantity: "90(UN)",
      saleDate: "20/06/2024",
    },
    {
      key: "10",
      id: "10",
      name: "Molho de Tomate",
      saleValue: "60.8",
      quantity: "170(UN)",
      saleDate: "25/06/2024",
    },
    {
      key: "11",
      id: "11",
      name: "Biscoito de Água e Sal",
      saleValue: "85.7",
      quantity: "220(UN)",
      saleDate: "30/06/2024",
    },
  ];

  const sendHome = () => {
    navigate("/dashboard");
  };

  const dataFiltered = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.Container>
      <S.Content>
        <div>
          <h2>
            <a onClick={() => sendHome()}>NOME DA EMPRESA</a>
            {" > "} <span>RELATÓRIO DE VENDAS</span>
          </h2>
          <S.Line style={{ borderTop: "1px solid #244bc5" }} />
        </div>
        <S.TableContainer>
          <S.SearchButtonContainer>
            <S.SearchInput>
              <Input
                placeholder={"BUSCAR..."}
                color="#244bc5"
                leftIcon={<MagnifyingGlass size={18} weight="light" />}
                inputFunction={handleChangeSearch}
              />
            </S.SearchInput>

            <S.AddButton>
              <Button
                label="GERAR RELATÓRIO"
                shape="round"
                color="#f5f6fa"
                secondColor="#244bc5"
                buttonFunction={() => salesReportModal()}
              />
            </S.AddButton>
          </S.SearchButtonContainer>
          <S.StyledTable
            columns={columns}
            bordered
            dataSource={dataFiltered}
            pagination={{ pageSize: 9 }}
            locale={{ emptyText: "Nenhuma venda encontrada" }}
            scroll={{ x: true }}
          />
        </S.TableContainer>
        <DeleteModal
          id={deleteId}
          onCancel={closeDeleteModal}
          open={isDeleteModalOpen}
          headerText={`DELETAR VENDA ${deleteId}?`}
        />
        <SalesReportModal
          onCancel={closeSalesReportModal}
          open={isSalesReportModalOpen}
        />
      </S.Content>
    </S.Container>
  );
}
