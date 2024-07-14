import * as S from "./styles";
import { Modal } from "../../components/Modal";

import { Button } from "../Button";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { CategoryInterface } from "../../services/types/categoryType";
import { MarkerCircle, XCircle } from "@phosphor-icons/react";
import { Input } from "antd";
import {
  DeleteCategories,
  GetCategories,
  PostCategory,
  PutCategories,
} from "../../services/categoryServices";
import { warningNotification } from "../Notification";

interface AddItemsModalInterface {
  open?: boolean;
  onCancel?: () => void;
}

export const AddCategoriesModal: React.FC<AddItemsModalInterface> = ({
  open,
  onCancel,
}) => {
  const [name, setName] = useState<string>();
  const [categoryData, setCategoryData] = useState<Array<CategoryInterface>>();
  const [reload, setReload] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editingCategoryId, setEditingCategoryId] = useState<number>();
  const [editingCategoryName, setEditingCategoryName] = useState<string>("");
  const token = Cookies.get("token") || "";

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
  }, [reload, token]);

  function reloadPage() {
    setReload((prev) => prev + 1);
  }

  const handleChangeName = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setName(value);
  };

  const AddCategory = async () => {
    if (name) {
      const response = await PostCategory(name, token);
      if (response?.status == 201) {
        reloadPage();
      }
    }
  };

  const DeleteCategory = async (id: number) => {
    const response = await DeleteCategories(token, id);
    if (response?.status == 204) {
      reloadPage();
    }
  };

  const startEditing = (id: number, currentName: string) => {
    setEditingCategoryId(id);
    setEditingCategoryName(currentName);
    setIsEdit(true);
  };

  const handleEditChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setEditingCategoryName(value);
  };

  const saveEdit = async () => {
    if (editingCategoryId) {
      const response = await PutCategories(
        token,
        editingCategoryId,
        editingCategoryName
      ); // Supondo que você tenha esta função
      if (response?.status === 200) {
        reloadPage();
        setIsEdit(false);
      }
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      headerText={`ADICIONAR CATEGORIA`}
      footer={[
        <Button
          label="ADICIONAR"
          shape="round"
          color="#f5f6fa"
          secondColor="#244bc5"
          buttonFunction={AddCategory}
          disabled={isEdit}
        />,
      ]}
    >
      <S.InputContainer key={1}>
        <span>NOME:</span>
        <Input
          placeholder="NOME DA CATEGORIA"
          color="#244bc5"
          value={name}
          onChange={handleChangeName}
          disabled={isEdit}
        />
      </S.InputContainer>
      {categoryData && categoryData.length > 0 ? (
        categoryData.map((item) => (
          <S.CategorieList key={item.id}>
            {editingCategoryId === item.id && isEdit ? (
              <Input value={editingCategoryName} onChange={handleEditChange} />
            ) : (
              <label>{item.name}</label>
            )}
            <section>
              <MarkerCircle
                size={24}
                weight="bold"
                color="#244BC5"
                cursor="pointer"
                alt="Editar categoria"
                onClick={
                  isEdit
                    ? () => saveEdit()
                    : () => startEditing(item.id, item.name)
                }
              />
              <XCircle
                size={24}
                weight="bold"
                color="#C52D24"
                cursor="pointer"
                alt="Deletar categoria"
                onClick={
                  isEdit
                    ? () => setIsEdit(false)
                    : () => DeleteCategory(item.id)
                }
              />
            </section>
          </S.CategorieList>
        ))
      ) : (
        <label>Sem categorias cadastradas</label>
      )}
    </Modal>
  );
};
