import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { AddProductSchema } from "../../services/types/addProductType";

interface AddProductModalInterface {
  open?: boolean;
  onCancel?: () => void;
}

interface ErrorInterface {
  errorType: "" | "warning" | "error" | undefined;
  errorShow: boolean;
}

export const AddProductModal: React.FC<AddProductModalInterface> = ({
  open,
  onCancel,
}) => {
  const [name, setName] = useState<string>();
  const [expirationDate, setExpirationDate] = useState<string>();
  const [unit, setUnit] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [lote, setLote] = useState<string>();
  const [quantity, setQuantity] = useState<number>();
  const [purschasePrice, setPurchasePrice] = useState<number>();
  const [salePrice, setSalePrice] = useState<number>();

  const [errorName, setErrorName] = useState<ErrorInterface>();
  const [errorexpirationDate, setErrorExpirationDate] =
    useState<ErrorInterface>();
  const [errorquantity, setErrorQuantity] = useState<ErrorInterface>();
  const [errorPurchasePrice, setErrorPurchasePrice] =
    useState<ErrorInterface>();
  const [errorSalePrice, setErrorSalePrice] = useState<ErrorInterface>();

  const options = [
    { value: "other", label: "Outros" },
    { value: "un", label: "un" },
    { value: "m", label: "m" },
    { value: "cm", label: "cm" },
    { value: "mm", label: "mm" },
    { value: "km", label: "km" },
    { value: "m2", label: "m²" },
    { value: "cm2", label: "cm²" },
    { value: "km2", label: "km²" },
    { value: "ha", label: "Hectare" },
    { value: "L", label: "L" },
    { value: "mL", label: "mL" },
    { value: "m3", label: "m³" },
    { value: "cm3", label: "cm³" },
    { value: "g", label: "g" },
    { value: "mg", label: "mg" },
    { value: "kg", label: "kg" },
    { value: "t", label: "t" },
    { value: "alqueire", label: "Alqueire" },
    { value: "arroba", label: "Arroba" },
  ];

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddProductSchema.shape.name.parse(value);
      setErrorName({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorName({ errorType: "error", errorShow: true });
    }
    setName(value);
  };

  const handleChangeLote = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setLote(value);
  };

  const handleChangeExpirationDate = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddProductSchema.shape.expirationDate.parse(new Date(value));
      setErrorExpirationDate({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorExpirationDate({ errorType: "error", errorShow: true });
    }
    setExpirationDate(value);
  };

  const handleChangeQuantity = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddProductSchema.shape.quantity.parse(Number(value));
      setErrorQuantity({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorQuantity({ errorType: "error", errorShow: true });
    }
    setQuantity(Number(value));
  };

  const handleChangePurchasePrice = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddProductSchema.shape.purchasePrice.parse(Number(value));
      setErrorPurchasePrice({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorPurchasePrice({ errorType: "error", errorShow: true });
    }
    setPurchasePrice(Number(value));
  };

  const handleChangeSalePrice = (e: { target: { value: string } }) => {
    const { value } = e.target;
    try {
      AddProductSchema.shape.salePrice.parse(Number(value));
      setErrorSalePrice({ errorType: "", errorShow: false });
    } catch (error) {
      setErrorSalePrice({ errorType: "error", errorShow: true });
    }
    setSalePrice(Number(value));
  };

  const handleChangeUnit = (value: unknown) => {
    setUnit(String(value));
  };

  const handleChangeCategory = (value: unknown) => {
    setCategory(String(value));
  };

  const submit = () => {
    const json = {
      name: name,
      expirationDate: expirationDate,
      unit: unit,
      category: category,
      lote: lote,
      quantity: quantity,
      purschasePrice: purschasePrice,
      salePrice: salePrice,
    };

    console.log(json);

    if (onCancel != undefined) {
      onCancel();
    }

    console.log("ADICIONADO COM SUCESSO");
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText="ADICIONAR PRODUTO"
      footer={[
        <Button
          label="ADICIONAR"
          shape="round"
          color="#f5f6fa"
          secondColor="#244bc5"
          buttonFunction={submit}
        />,
      ]}
    >
      <S.ModalForm>
        <S.InputContainer>
          <span>NOME:</span>
          <Input
            placeholder="NOME DO PRODUTO"
            color="#244bc5"
            inputFunction={handleChangeName}
            status={errorName?.errorType}
            errorText={"O nome do produto precisa ter entre 2 e 60 caracteres."}
          />
        </S.InputContainer>
        <S.Row>
          <S.InputContainer>
            <span>VALIDADE:</span>
            <Input
              placeholder="VALIDADE"
              type="date"
              color="#244bc5"
              status={errorexpirationDate?.errorType}
              errorText={
                "A data de validade não pode ser anterior ao dia atual"
              }
              inputFunction={handleChangeExpirationDate}
            />
          </S.InputContainer>
          <S.InputContainer>
            <span>UNIDADE:</span>
            <S.CustomSelect
              placeholder="UNIDADE"
              options={options}
              defaultActiveFirstOption
              onChange={handleChangeUnit}
            />
          </S.InputContainer>
        </S.Row>
        <S.InputContainer>
          <span>CATEGORIA:</span>
          <S.CustomSelect
            placeholder="CATEGORIA"
            showSearch
            options={[
              {
                value: "alimentos",
                label: "Alimentos",
              },
              {
                value: "limpeza",
                label: "Produtos de Limpeza",
              },
              {
                value: "higiene",
                label: "Produtos de Higiene",
              },
            ]}
            onChange={handleChangeCategory}
          />
        </S.InputContainer>
        <S.Row>
          <S.InputContainer>
            <span>LOTE:</span>
            <Input
              placeholder="LOTE"
              color="#244bc5"
              inputFunction={handleChangeLote}
            />
          </S.InputContainer>
          <S.InputContainer>
            <span>QUANTIDADE:</span>
            <Input
              placeholder="QUANTIDADE"
              type="number"
              color="#244bc5"
              status={errorquantity?.errorType}
              errorText={"Insira um valor maior que 0"}
              inputFunction={handleChangeQuantity}
            />
          </S.InputContainer>
        </S.Row>
        <S.Row>
          <S.InputContainer>
            <span>PREÇO DE COMPRA:</span>
            <Input
              placeholder="R$00,00"
              type="number"
              color="#244bc5"
              status={errorPurchasePrice?.errorType}
              errorText={"Insira um preço maior que 0"}
              inputFunction={handleChangePurchasePrice}
            />
          </S.InputContainer>
          <S.InputContainer>
            <span>PREÇO DE VENDA:</span>
            <Input
              placeholder="R$00,00"
              type="number"
              color="#244bc5"
              status={errorSalePrice?.errorType}
              errorText={"Insira um preço maior que 0"}
              inputFunction={handleChangeSalePrice}
            />
          </S.InputContainer>
        </S.Row>
      </S.ModalForm>
    </Modal>
  );
};
