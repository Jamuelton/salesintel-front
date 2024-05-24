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

interface TableData {
  key: string;
  id: string;
  name: string;
  salesValue: string;
  quantity: string;
  saleDate: string;
}

export function Sales() {
  const navigate = useNavigate();

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
      dataIndex: "salesValue",
      key: "salesValue",
    },
    {
      title: "QNTD. TOTAL",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "DATA",
      dataIndex: "salesDate",
      key: "salesDate",
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
            alt="Adicionar itens"
          />
          <XCircle
            size={24}
            weight="bold"
            color="#C52D24"
            // onClick={() => deleteItem(record.id)}
            cursor={"pointer"}
            alt="Deletar produto"
          />
        </>
      ),
    },
  ];

  const sendHome = () => {
    navigate("/dashboard");
  };

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
                // inputFunction={handleChangeSearch}
              />
            </S.SearchInput>

            <S.AddButton>
              <Button
                label="GERAR RELATÓRIO"
                shape="round"
                color="#f5f6fa"
                secondColor="#244bc5"
                // buttonFunction={() => addProductModal()}
              />
            </S.AddButton>
          </S.SearchButtonContainer>
          <S.StyledTable
            columns={columns}
            bordered
            // dataSource={dataFiltered}
            pagination={{ pageSize: 9 }}
            locale={{ emptyText: "Nenhuma venda encontrada" }}
          />
        </S.TableContainer>
      </S.Content>
    </S.Container>
  );
}
