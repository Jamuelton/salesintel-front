import {
  ArrowCircleRight,
  Basket,
  DotsThreeOutline,
  PlusSquare,
  Receipt,
} from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import * as S from "./styles";
import { ProductList } from "../../components/productList";
import { useState } from "react";
import { CheckboxProps } from "antd";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

export function Home() {
  const PRODUCT_DATA_TEST = [
    {
      name: "transmissao",
      price: "2000,00",
      quantity: "17",
    },
    {
      name: "motor",
      price: "5000,00",
      quantity: "05",
    },
    {
      name: "freio",
      price: "300,00",
      quantity: "50",
    },
    {
      name: "bateria",
      price: "600,00",
      quantity: "20",
    },
    {
      name: "embreagem",
      price: "700,00",
      quantity: "15",
    },
    {
      name: "radiador",
      price: "400,00",
      quantity: "10",
    },
    {
      name: "amortecedor",
      price: "250,00",
      quantity: "30",
    },
    {
      name: "filtro de ar",
      price: "50,00",
      quantity: "100",
    },
    {
      name: "velas de ignição",
      price: "25,00",
      quantity: "200",
    },
    {
      name: "pneus",
      price: "400,00",
      quantity: "40",
    },
  ];

  const itemsToShow = PRODUCT_DATA_TEST.slice(0, 7);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [samePrice, setSamePrice] = useState<boolean>(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: CheckboxProps["onChange"] = () => {
    setSamePrice(!samePrice);
  };

  return (
    <S.Container>
      <S.NavbarArea>navbar</S.NavbarArea>
      <S.Content>
        <div>
          <h2>Nome da Empresa</h2>
          <S.Line style={{ borderTop: "1px solid #244bc5" }} />
        </div>
        <S.PrincipalContent>
          <S.ProductArea>
            <S.ProductAreaTitle>
              <h3>Produtos</h3>
              <ArrowCircleRight size={32} weight="fill" color="#244bc5" />
            </S.ProductAreaTitle>
            <S.ProductAreaList>
              {itemsToShow.map((item, index) => (
                <ProductList
                  key={index}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
              {PRODUCT_DATA_TEST.length > 7 && (
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
    </S.Container>
  );
}
