import { Clock } from "../../pages/Clock";
import { ItemManager } from "../../pages/ItemManager";
import { ShyBall } from "../../pages/ShyBall";
import { ContainerLeft, ContainerRight, DefaultContainer } from "./styles";

export const Default = () => {
  return (
    <DefaultContainer>
      <ContainerLeft>
        <Clock />
        <ItemManager />
      </ContainerLeft>
      <ContainerRight>
        <ShyBall />
      </ContainerRight>
    </DefaultContainer>
  );
};
