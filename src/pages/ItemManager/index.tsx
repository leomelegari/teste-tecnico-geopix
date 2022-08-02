import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";

interface ItemProp {
  id: string;
  name: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Digite ao menos 3 caracteres"),
});

export const ItemManager = () => {
  const [items, setItems] = useState<ItemProp[]>([]);
  const [selected, setSelected] = useState<string>("");

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ItemProp>({ resolver: yupResolver(schema) });

  const handleAddItem = (data: ItemProp) => {
    if (data.name.length > 0) {
      const newItem: ItemProp = {
        id: uuidv4(),
        name: data.name,
      };

      setItems((state) => [...state, newItem]);
      reset();
    }
  };

  const handleRemoveItem = (data: string) => {
    const newItemList = items.filter((item) => item.id !== data);
    setItems(newItemList);
  };

  const handleClearBox = () => {
    setItems([]);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAddItem)}>
        <div>
          <select
            placeholder="Selecione uma opção"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="default">Selecione uma opção</option>
            {items.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Insira um item"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <button type="submit">Adicionar</button>
          <button type="button" onClick={() => handleRemoveItem(selected)}>
            Remover
          </button>
          <button type="button" onClick={handleClearBox}>
            Limpar caixa
          </button>
        </div>
        <span>{}</span>
      </form>
    </Container>
  );
};
