import { MagnifyingGlass, PlusCircle, XCircle } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./styles";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddProductModal } from "../../components/AddProductModal";
import { AddItemsModal } from "../../components/AddItemsModal";
import { DeleteModal } from "../../components/DeleteModal";

interface TableData {
  key: string;
  id: string;
  name: string;
  category: string;
  quantity: string;
  expirationDate: string;
}

export function Products() {
  const navigate = useNavigate();
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);
  const [addItemsId, setAddItemsId] = useState(0);
  const [addItemsName, setAddItemsName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

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
      title: "CATEGORIA",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "QNTD. TOTAL",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "VENCIMENTO",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    {
      align: "center",
      render: (record) => (
        <>
          <PlusCircle
            size={24}
            weight="bold"
            color="#244BC5"
            onClick={() => addItems(record.id, record.name)}
            cursor={"pointer"}
            alt="Adicionar itens"
          />
          <XCircle
            size={24}
            weight="bold"
            color="#C52D24"
            onClick={() => deleteItem(record.id)}
            cursor={"pointer"}
            alt="Deletar produto"
          />
        </>
      ),
    },
  ];

  const addItems = (id: number, name: string) => {
    setAddItemsId(id);
    setAddItemsName(name);
    setIsAddItemsModalOpen(true);
  };

  const deleteItem = (id: number) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const addProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const handleChangeSearch = (e: { target: { value: string } }) => {
    const { value } = e.target;

    setSearchTerm(value);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const closeAddItemsModal = () => {
    setIsAddItemsModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const sendHome = () => {
    navigate("/dashboard");
  };

  const data: TableData[] = [
    {
      key: "1",
      id: "1",
      name: "Arroz Jurandir",
      category: "Alimentos",
      quantity: "350(UN)",
      expirationDate: "10/07/2024",
    },
    {
      key: "2",
      id: "2",
      name: "Feijão Carioca",
      category: "Alimentos",
      quantity: "200(UN)",
      expirationDate: "15/08/2024",
    },
    {
      key: "3",
      id: "3",
      name: "Macarrão Parafuso",
      category: "Alimentos",
      quantity: "150(UN)",
      expirationDate: "20/09/2024",
    },
    {
      key: "4",
      id: "4",
      name: "Óleo de Soja",
      category: "Alimentos",
      quantity: "100(UN)",
      expirationDate: "01/12/2024",
    },
    {
      key: "5",
      id: "5",
      name: "Açúcar Refinado",
      category: "Alimentos",
      quantity: "250(UN)",
      expirationDate: "30/11/2024",
    },
    {
      key: "6",
      id: "6",
      name: "Café em Pó",
      category: "Alimentos",
      quantity: "300(UN)",
      expirationDate: "05/06/2024",
    },
    {
      key: "7",
      id: "7",
      name: "Farinha de Trigo",
      category: "Alimentos",
      quantity: "180(UN)",
      expirationDate: "10/10/2024",
    },
    {
      key: "8",
      id: "8",
      name: "Leite Condensado",
      category: "Alimentos",
      quantity: "120(UN)",
      expirationDate: "25/12/2024",
    },
    {
      key: "9",
      id: "9",
      name: "Margarina",
      category: "Alimentos",
      quantity: "90(UN)",
      expirationDate: "05/05/2024",
    },
    {
      key: "10",
      id: "10",
      name: "Molho de Tomate",
      category: "Alimentos",
      quantity: "170(UN)",
      expirationDate: "15/03/2024",
    },
    {
      key: "11",
      id: "11",
      name: "Biscoito de Água e Sal",
      category: "Alimentos",
      quantity: "220(UN)",
      expirationDate: "25/04/2024",
    },
  ];

  const dataFiltered = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.Container>
      <S.Content>
        <div>
          <h2>
            <a onClick={() => sendHome()}>NOME DA EMPRESA</a>
            {" > "} <span>PRODUTOS</span>
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
                label="ADICIONAR PRODUTO"
                shape="round"
                color="#f5f6fa"
                secondColor="#244bc5"
                buttonFunction={() => addProductModal()}
              />
            </S.AddButton>
          </S.SearchButtonContainer>
          <S.StyledTable
            columns={columns}
            bordered
            dataSource={dataFiltered}
            pagination={{ pageSize: 9 }}
            locale={{ emptyText: "Nenhum produto encontrado" }}
          />
        </S.TableContainer>
      </S.Content>
      <AddProductModal
        open={isAddProductModalOpen}
        onCancel={closeAddProductModal}
      />
      <AddItemsModal
        open={isAddItemsModalOpen}
        onCancel={closeAddItemsModal}
        id={addItemsId}
        productName={addItemsName}
      />
      <DeleteModal
        open={isDeleteModalOpen}
        onCancel={closeDeleteModal}
        id={deleteId}
        headerText={`DELETAR PRODUTO ${deleteId}`}
      />
    </S.Container>
  );
}
