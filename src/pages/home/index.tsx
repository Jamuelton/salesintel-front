import {
  ArrowCircleRight,
  Basket,
  DotsThreeOutline,
  PlusSquare,
  Power,
  Receipt,
  UserCircle,
} from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import * as S from "./styles";
import { ProductList } from "../../components/productList";
import { useEffect, useState } from "react";
import { CheckboxProps, Popover } from "antd";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/auth/UseAuth";
import { warningNotification } from "../../components/Notification";
import { GetUserByEmail } from "../../services/userServices";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AddProductInterface } from "../../services/types/addProductType";
import {
  GetProductById,
  GetProductsByUser,
} from "../../services/productServices";
import { UserInterface } from "../../services/types/userType";

export function Home() {
  const navigate = useNavigate();

  const token = Cookies.get("token") || "";
  const decoded = jwtDecode(token);
  const email = decoded.sub || "";

  const { logout, reloadPage } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
  const [samePrice, setSamePrice] = useState<boolean>(true);
  const [productInfo, setProductInfo] = useState<Array<AddProductInterface>>();
  const [product, setProduct] = useState<AddProductInterface>();
  const [userInfo, setUserInfo] = useState<UserInterface>();

  useEffect(() => {
    if (decoded != undefined) {
      const getProducts = async () => {
        try {
          const response = await GetProductsByUser(token);
          if (response?.status == 200) {
            setProductInfo(response.data);
          }
        } catch (error) {
          warningNotification("Erro ao buscar produtos");
        }
      };

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

  const itemsToShow = productInfo && productInfo.slice(0, 6);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getProductById = async (id: string) => {
    try {
      const response = await GetProductById(
        token != undefined ? token : "",
        String(id)
      );
      if (response?.status == 200) {
        setProduct(response.data);
      }
    } catch (error) {
      warningNotification("Erro ao buscar produtos");
    }
  };

  const showProductModal = (id?: number) => {
    setIsProductModalOpen(true);
    id && getProductById(id.toString());
  };

  const handleProductOk = () => {
    setIsProductModalOpen(false);
  };

  const handleProductCancel = () => {
    setIsProductModalOpen(false);
  };

  const onChange: CheckboxProps["onChange"] = () => {
    setSamePrice(!samePrice);
  };

  const sendToLogin = () => {
    navigate("/login");
  };

  const sendToProducts = () => {
    navigate("/products");
  };

  const sendToSales = () => {
    navigate("/sales");
  };

  const logouting = () => {
    logout();
    reloadPage();
    warningNotification("Usuário deslogado");
    sendToLogin();
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <div>
            <h2>{userInfo?.company}</h2>
            <Popover
              content={
                <S.LogoutArea onClick={logouting}>
                  <label htmlFor="">Encerrar</label>
                  <Power size={24} weight="regular" color="#ff0000" />
                </S.LogoutArea>
              }
            >
              <UserCircle size={36} weight="fill" color="#244bc5" />
            </Popover>
          </div>
          <S.Line style={{ borderTop: "1px solid #244bc5" }} />
        </S.Header>
        <S.PrincipalContent>
          <S.ProductArea>
            <S.ProductAreaTitle>
              <h3>Produtos</h3>
              <ArrowCircleRight
                size={32}
                weight="fill"
                color="#244bc5"
                onClick={() => sendToProducts()}
              />
            </S.ProductAreaTitle>
            <S.ProductAreaList>
              {itemsToShow && itemsToShow.length > 0 ? (
                itemsToShow.map((item, index) => (
                  <ProductList
                    key={index}
                    name={item.name}
                    price={item.salePrice.toString()}
                    quantity={item.quantity.toString()}
                    openModal={() => showProductModal(item.id)}
                  />
                ))
              ) : (
                <p>Sem produtos cadastrados</p>
              )}
              {productInfo && productInfo.length > 5 && (
                <S.ProductDots>
                  <DotsThreeOutline size={32} weight="fill" />
                </S.ProductDots>
              )}
            </S.ProductAreaList>
          </S.ProductArea>
          <S.StatusArea>
            <S.DataArea>
              <S.AreaOne>area 1</S.AreaOne>
              <S.RegisterSellerArea>
                <Button
                  label="Registrar vendas"
                  color="#f5f6fa"
                  secondColor="#244bc5"
                  icon={<PlusSquare size={20} />}
                  shape="round"
                  size="large"
                  buttonFunction={showModal}
                />
                <S.AreaTwo>Area 2</S.AreaTwo>
              </S.RegisterSellerArea>
            </S.DataArea>
            <S.ButtonArea>
              <Button
                label="Relatorio de vendas"
                color="#f5f6fa"
                secondColor="#244bc5"
                shape="round"
                icon={<Basket size={20} />}
                buttonFunction={sendToSales}
              />
              <Button
                label="Relatorio Financeiro"
                color="#f5f6fa"
                secondColor="#244bc5"
                shape="round"
                icon={<Receipt size={20} />}
              />
            </S.ButtonArea>
          </S.StatusArea>
        </S.PrincipalContent>
      </S.Content>
      <S.RegisterSellModal
        title="Registrar venda"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Registrar"}
      >
        <section>
          <S.SelectAreaModal>
            <S.LightText>Produto:</S.LightText>
            <Select defaut="Selecione" />
          </S.SelectAreaModal>
          <S.PriceAreaModal>
            <div>
              <S.LightText>Preço de venda:</S.LightText>
              <S.HeavyText>R$ 30,00</S.HeavyText>
            </div>
            <div>
              <S.LightText>Unidade:</S.LightText>
              <S.HeavyText>KG</S.HeavyText>
            </div>
          </S.PriceAreaModal>
          <S.SelectAreaModal>
            <S.LightText>Categoria da venda:</S.LightText>
            <Select defaut="Selecione" />
          </S.SelectAreaModal>
          <div>
            <S.BoxPrice onChange={onChange}>
              vender pelo mesmo valor cadastrado
            </S.BoxPrice>
          </div>
          {samePrice && (
            <S.InputAreaModal>
              <S.LightText>Valor da venda(UN):</S.LightText>
              <Input leftIcon={"R$"} placeholder="00,00" color="#244bc5" />
            </S.InputAreaModal>
          )}
        </section>
      </S.RegisterSellModal>
      <S.ProductModal
        title={product?.name}
        open={isProductModalOpen}
        onOk={handleProductOk}
        onCancel={handleProductCancel}
        okText={"Fechar"}
      >
        <section>
          <div>
            <S.HeavyText>Preço de compra:</S.HeavyText>
            <S.LightText>{product?.purchasePrice}</S.LightText>
          </div>
          <div>
            <S.HeavyText>Preço de venda:</S.HeavyText>
            <S.LightText>{product?.salePrice}</S.LightText>
          </div>

          <div>
            <S.HeavyText>Quantidade:</S.HeavyText>
            <S.LightText>{product?.quantity}</S.LightText>
          </div>

          <div>
            <S.HeavyText>Tipo:</S.HeavyText>
            <S.LightText>{product?.unit}</S.LightText>
          </div>

          <div>
            <S.HeavyText>Data de vencimento:</S.HeavyText>
            <S.LightText>{product?.expiration}</S.LightText>
          </div>

          <div>
            <S.HeavyText>Produtos vendidos:</S.HeavyText>
            <S.LightText>{}</S.LightText>
          </div>

          <div>
            <S.HeavyText>Lucro:</S.HeavyText>
            <S.LightText>
              {product && product?.salePrice - product?.purchasePrice}
            </S.LightText>
          </div>
        </section>
      </S.ProductModal>
    </S.Container>
  );
}
