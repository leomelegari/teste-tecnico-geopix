import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  ContainerButton,
  ContainerInput,
  ContainerSelect,
} from "./styles";
import { toast } from "react-toastify";

interface ItemProp {
  id: string;
  name: string;
}

// Pequeno e simples esquema de validação de campos com yup, não tem muito o que dizer
// pois ele é bem autoexplicativo
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Digite ao menos 3 caracteres"),
});

export const ItemManager = () => {
  // Os estados onde as informações que utilizo são armazenadas
  const [items, setItems] = useState<ItemProp[]>([]);
  const [selected, setSelected] = useState<string>("");

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<ItemProp>({ resolver: yupResolver(schema) });

  // Função de adicionar item, onde dentro dela crio um objeto com as informações
  // do novo item e, posteriormente, adiciono.
  // Precisei fazer dessa forma para conseguir inserir o ID com UUID
  const handleAddItem = (data: ItemProp) => {
    const checkForDuplicatedData = items.find(
      (item) => item.name === data.name,
    );

    if (!checkForDuplicatedData) {
      const newItem: ItemProp = {
        id: uuidv4(),
        name: data.name,
      };

      // Aqui fiz a atualização do estado dessa maneira pois utilizo do valor anterior já existente
      // para acrescentar um novo valor. Então dessa forma não violo algumas closures do react =D
      setItems((state) => [...state, newItem]);
      toast.success("Informação registrada!");
      reset();
    } else {
      toast.error("Informação já existe!");
    }
  };

  // Função que remove o item da lista partindo da comparação do ID, gerado pelo UUID
  const handleRemoveItem = (data: string) => {
    const newItemList = items.filter((item) => item.name !== data);

    if (newItemList.length !== items.length) {
      setItems(newItemList);
      setSelected("");
      toast.info("Informação removida!");
    } else {
      toast.error("Nenhuma informação selecionada!");
    }
  };

  const handleClearBox = () => {
    if (items.length !== 0) {
      setItems([]);
      toast.info("Todas as informações foram removidas!");
    } else {
      toast.error("Nenhuma informação cadastrada!");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleAddItem)}>
        <ContainerSelect>
          <select
            placeholder="Selecione uma opção"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <option value="default">Selecione uma opção</option>
            {items.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </ContainerSelect>
        <ContainerInput>
          <input
            type="text"
            placeholder="Insira um item"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </ContainerInput>
        <ContainerButton>
          <button type="submit" className="add">
            Adicionar
          </button>
          <button
            type="button"
            className="remove"
            onClick={() => handleRemoveItem(selected)}
          >
            Remover
          </button>
          <button type="button" className="clear" onClick={handleClearBox}>
            Limpar caixa
          </button>
        </ContainerButton>
      </form>
      {selected ? (
        <>
          <span>Informação selecionada:</span>
          <span>{selected}</span>
        </>
      ) : null}
    </Container>
  );
};
