import { MagnifyingGlass, PlusCircle, XCircle } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./styles";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddProductModal } from "../../components/AddProductModal";
import { AddItemsModal } from "../../components/AddItemsModal";
import { DeleteModal } from "../../components/DeleteModal";
import {
  GetProductById,
  GetProductsByUser,
} from "../../services/productServices";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { GetUserByEmail } from "../../services/userServices";
import { UserInterface } from "../../services/types/userType";
import { warningNotification } from "../../components/Notification";
import { AddProductInterface } from "../../services/types/addProductType";

interface TableData {
  key: string;
  id: string;
  name: string;
  category: string;
  categoryId: number;
  quantity: string;
  expiration: string;
  unit: string;
}

export function Products() {
  const navigate = useNavigate();
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [data, setData] = useState<TableData[]>([]);
  const [userInfo, setUserInfo] = useState<UserInterface>();
  const [addItemsProduct, setAddItemsProduct] = useState<AddProductInterface>({
    batch: 0,
    categoryId: 0,
    expiration: "",
    purchasePrice: 0,
    quantity: 0,
    salePrice: 0,
    unit: "",
    userId: 0,
  });

  const token = Cookies.get("token") || "";
  const decoded = jwtDecode(token);
  const email = decoded.sub || "";

  const getProduct = async (id: number) => {
    try {
      const response = await GetProductById(
        token != undefined ? token : "",
        String(id)
      );
      if (response?.status == 200) {
        setAddItemsProduct(response.data);
      }
    } catch (error) {
      warningNotification("Erro ao buscar produtos");
    }
  };

  const getProducts = async () => {
    try {
      const response = await GetProductsByUser(token != undefined ? token : "");
      if (response?.status == 200) {
        setData(response.data);
      }
    } catch (error) {
      warningNotification("Erro ao buscar produtos");
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

      getUserInfo();
      getProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      dataIndex: "categoryId",
      key: "category",
    },
    {
      title: "QNTD. TOTAL",
      render: (record) => (
        <>
          {record.quantity}({record.unit})
        </>
      ),
      key: "quantity",
    },
    {
      title: "VENCIMENTO",
      dataIndex: "expiration",
      key: "expirationDate",
      render: (expiration: string) =>
        new Date(expiration).toLocaleDateString("pt-BR"),
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

  const addItems = (id: number) => {
    getProduct(id);
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
    getProducts();
    setIsAddProductModalOpen(false);
  };

  const closeAddItemsModal = () => {
    getProducts();
    setIsAddItemsModalOpen(false);
  };

  const closeDeleteModal = () => {
    getProducts();
    setIsDeleteModalOpen(false);
  };

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
            <a onClick={() => sendHome()}>{userInfo?.company?.toUpperCase()}</a>
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
            scroll={{ x: true }}
          />
        </S.TableContainer>
      </S.Content>
      <AddProductModal
        open={isAddProductModalOpen}
        onCancel={closeAddProductModal}
        userId={userInfo?.id || 0}
      />
      <AddItemsModal
        open={isAddItemsModalOpen}
        onCancel={closeAddItemsModal}
        product={addItemsProduct}
      />
      <DeleteModal
        open={isDeleteModalOpen}
        onCancel={closeDeleteModal}
        headerText={`DELETAR PRODUTO ${deleteId}`}
        id={deleteId}
      />
    </S.Container>
  );
}
