import * as S from "./styles";
import { Modal } from "../../components/Modal";
import { Input } from "../Input";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import {
  AddProductInterface,
  AddProductSchema,
} from "../../services/types/addProductType";
import { PostProduct } from "../../services/productServices";
import Cookies from "js-cookie";
import { successNotification, warningNotification } from "../Notification";
import { GetCategories } from "../../services/categoryServices";
import { CategoryInterface } from "../../services/types/categoryType";

interface AddProductModalInterface {
  open?: boolean;
  onCancel?: () => void;
  userId: number;
}

interface ErrorInterface {
  errorType: "" | "warning" | "error" | undefined;
  errorShow: boolean;
}

export const AddProductModal: React.FC<AddProductModalInterface> = ({
  open,
  onCancel,
  userId,
}) => {
  const [name, setName] = useState<string>();
  const [expirationDate, setExpirationDate] = useState<string>();
  const [unit, setUnit] = useState<string>("other");
  const [category, setCategory] = useState<string>();
  const [lote, setLote] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [purschasePrice, setPurchasePrice] = useState<number>();
  const [salePrice, setSalePrice] = useState<number>();
  const [categoryData, setCategoryData] = useState<CategoryInterface[]>();

  const [errorName, setErrorName] = useState<ErrorInterface>();
  const [errorLote, setErrorLote] = useState<ErrorInterface>();
  const [errorexpirationDate, setErrorExpirationDate] =
    useState<ErrorInterface>();
  const [errorquantity, setErrorQuantity] = useState<ErrorInterface>();
  const [errorPurchasePrice, setErrorPurchasePrice] =
    useState<ErrorInterface>();
  const [errorSalePrice, setErrorSalePrice] = useState<ErrorInterface>();

  const token = Cookies.get("token") || "";

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

  const isFormValid = () => {
    return (
      name &&
      expirationDate &&
      unit &&
      category &&
      lote &&
      quantity &&
      purschasePrice &&
      salePrice &&
      !errorName?.errorShow &&
      !errorLote?.errorShow &&
      !errorexpirationDate?.errorShow &&
      !errorquantity?.errorShow &&
      !errorPurchasePrice?.errorShow &&
      !errorSalePrice?.errorShow
    );
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await GetCategories(token);
        if (response?.status == 200) {
          setCategoryData(response.data);
        }
      } catch (error) {
        warningNotification("Erro ao resgatar categorias");
      }
    };

    getCategories();
  }, [token]);

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
    if (value != "") {
      try {
        AddProductSchema.shape.lote.parse(Number(value));
        setErrorLote({ errorType: "", errorShow: false });
      } catch (error) {
        setErrorLote({ errorType: "error", errorShow: true });
      }
    } else {
      setErrorLote({ errorType: "error", errorShow: true });
    }
    setLote(Number(value));
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
    if (String(value) != "") {
      setUnit(String(value));
    }
  };

  const handleChangeCategory = (value: unknown) => {
    setCategory(String(value));
  };

  const submit = async () => {
    if (isFormValid()) {
      try {
        const productData: AddProductInterface = {
          batch: Number(lote),
          categoryId: Number(category),
          expiration: expirationDate || "",
          purchasePrice: Number(purschasePrice),
          quantity: Number(quantity),
          salePrice: Number(salePrice),
          unit: unit || "",
          userId: userId,
          name: name || "",
        };
        const response = await PostProduct(productData, token);
        if (response?.status == 201) {
          successNotification("Produto adicionado");
          if (onCancel != undefined) {
            onCancel();
          }
        }
      } catch (error) {
        warningNotification("Ocorreu um erro!");
      }
    } else {
      warningNotification("Preencha todos os campos");
    }
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
            errorText={
              "O nome do produto precisa ter entre 3 e 100 caracteres."
            }
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
              aria-errormessage="Selecione uma unidade"
              defaultValue={options[0].value}
            />
          </S.InputContainer>
        </S.Row>
        <S.InputContainer>
          <span>CATEGORIA:</span>
          <S.CustomSelect
            placeholder="CATEGORIA"
            showSearch
            options={
              categoryData != undefined
                ? categoryData.map((category) => ({
                    value: category.id,
                    label: category.name,
                  }))
                : []
            }
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
              status={errorLote?.errorType}
              errorText={
                "O lote precisa ter entre 1 e 10 caracteres numéricos."
              }
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
              min={1}
              step={1}
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
              min={0.01}
              step={0.01}
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
              min={0.01}
              step={0.01}
            />
          </S.InputContainer>
        </S.Row>
      </S.ModalForm>
    </Modal>
  );
};
