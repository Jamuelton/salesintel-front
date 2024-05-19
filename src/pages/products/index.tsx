import { MagnifyingGlass, PlusCircle, XCircle } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./styles";
import type { ColumnsType } from "antd/es/table";

interface TableData {
  key: string;
  id: string;
  name: string;
  category: string;
  quantity: string;
  expirationDate: string;
}

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
          onClick={() => addItems(record.id)}
          cursor={"pointer"}
        />
        <XCircle
          size={24}
          weight="bold"
          color="#C52D24"
          onClick={() => deleteItem(record.id)}
          cursor={"pointer"}
        />
      </>
    ),
  },
];

const addItems = (id: number) => {
  console.log("Adicionar item no: ", id);
};

const deleteItem = (id: number) => {
  console.log("Deletar item: ", id);
};

const addProduct = () => {
  console.log("Adicionar produto");
};

const handleChangeSearch = (e: { target: { value: string } }) => {
  const { value } = e.target;

  console.log(value);
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

export function Products() {
  return (
    <S.Container>
      <div>Navbar</div>
      <S.Content>
        <div>
          <h2>
            NOME DA EMPRESA {"> "} <span>PRODUTOS</span>
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
                buttonFunction={() => addProduct()}
              />
            </S.AddButton>
          </S.SearchButtonContainer>
          <S.StyledTable
            columns={columns}
            bordered
            dataSource={data}
            pagination={{ pageSize: 9 }}
          />
        </S.TableContainer>
      </S.Content>
    </S.Container>
  );
}
