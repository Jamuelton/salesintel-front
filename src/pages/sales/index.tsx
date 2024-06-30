import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Input } from "../../components/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
// import { DeleteModal } from "../../components/DeleteModal";
import { SalesReportModal } from "../../components/SalesReportModal";
import { GetUserByEmail } from "../../services/userServices";
import { warningNotification } from "../../components/Notification";
import { UserInterface } from "../../services/types/userType";
import { GetSales } from "../../services/salesServices";
import { SalesInterface } from "../../services/types/salesType";
import { AddProductInterface } from "../../services/types/addProductType";

export function Sales() {
  const navigate = useNavigate();
  const token = Cookies.get("token") || "";
  const decoded = jwtDecode(token);
  const email = decoded.sub || "";

  const [searchTerm, setSearchTerm] = useState("");
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [deleteId, setDeleteId] = useState(0);
  const [isSalesReportModalOpen, setIsSalesReportModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInterface>();
  const [sales, setSales] = useState<Array<SalesInterface>>([]);

  const getSales = async () => {
    try {
      const response = await GetSales(token);
      if (response?.status == 200) {
        setSales(response.data);
      }
    } catch (error) {
      warningNotification("Erro ao resgatar vendas");
    }
  };

  useEffect(() => {
    if (decoded != undefined) {
      const getUserInfo = async () => {
        try {
          const response = await GetUserByEmail(token, email);
          if (response?.status == 200) {
            setUserInfo(response.data);
          }
        } catch (error) {
          warningNotification("Erro ao resgatar usuário");
        }
      };

      getSales();
      getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // const deleteItem = (id: number) => {
  //   setDeleteId(id);
  //   setIsDeleteModalOpen(true);
  // };

  // const closeDeleteModal = () => {
  //   setIsDeleteModalOpen(false);
  // };

  const columns: ColumnsType<SalesInterface> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "PRODUTO",
      dataIndex: "product",
      key: "product",
      render: (product: AddProductInterface) => product.name,
    },
    {
      title: "VALOR TOTAL",
      dataIndex: "value",
      key: "value",
      render: (value: number) => `R$ ${String(value).replace(".", ",")}`,
    },
    {
      title: "QNTD. VENDIDA",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "DATA",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) =>
        new Date(createdAt).toLocaleDateString("pt-BR"),
    },
    // {
    //   align: "center",
    //   render: (record) => (
    //     <>
    //       <DotsThreeCircle
    //         size={24}
    //         weight="bold"
    //         color="#244BC5"
    //         // onClick={() => addItems(record.id, record.name)}
    //         cursor={"pointer"}
    //         alt="Visualizar venda"
    //       />
    //       <XCircle
    //         size={24}
    //         weight="bold"
    //         color="#C52D24"
    //         onClick={() => deleteItem(record.id)}
    //         cursor={"pointer"}
    //         alt="Deletar venda"
    //       />
    //     </>
    //   ),
    // },
  ];

  const sendHome = () => {
    navigate("/dashboard");
  };

  const dataFiltered = sales.filter((item) =>
    item.product?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.Container>
      <S.Content>
        <div>
          <h2>
            <a onClick={() => sendHome()}>{userInfo?.company?.toUpperCase()}</a>
            {" > "} <span>VENDAS</span>
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
        {/* <DeleteModal
          id={deleteId}
          onCancel={closeDeleteModal}
          open={isDeleteModalOpen}
          headerText={`DELETAR VENDA ${deleteId}?`}
        /> */}
        <SalesReportModal
          onCancel={closeSalesReportModal}
          open={isSalesReportModalOpen}
          data={sales}
        />
      </S.Content>
    </S.Container>
  );
}
