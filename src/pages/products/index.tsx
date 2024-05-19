import * as S from "./styles";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableData {
  id: string;
  name: string;
  category: string;
  quantity: string;
  expirationDate: string;
}

const columns: ColumnsType<TableData> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Produto",
    dataIndex: "product",
  },
  {
    title: "QNTD. TOTAL",
    dataIndex: "quantity",
  },
  {
    title: "VENCIMENTO",
    dataIndex: "expirationDate",
  },
  {
    title: " ",
  },
];

export function Products() {
  return (
    <S.Container>
      <div>Navbar</div>
      <S.Content>
        <div>
          <h2>Nome da Empresa {"> "} Produtos</h2>
          <S.Line style={{ borderTop: "1px solid #244bc5" }} />
        </div>
        <div>
          <div>
            <input type="text" />
            <button>ADICIONAR PRODUTO</button>
          </div>
          <Table columns={columns} bordered />
        </div>
      </S.Content>
    </S.Container>
  );
}
