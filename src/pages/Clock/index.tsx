import { useState } from "react";
import { ClockNumbers, Colon, TimeContainer } from "./styles";

export const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // setInterval foi necessário aqui devido a necessidade de mostrar
  // o horário em tempo real na tela. Assim, a cada segundo, o valor é
  // atualizado para o usuário
  setInterval(() => {
    const date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  }, 1000);

  return (
    <TimeContainer>
      {/* 
      Houve a necessidade de utilizar desse máginifico recurso do JS, o padStart
      pois quando alguma informação era de apenas 1 caractér, ficava "feia" a visualização.
      Então adicionando esse recurso do js, esse valor, quando faltante, é incrementado com 0 
      */}
      <ClockNumbers>{String(hours).padStart(2, "0")}</ClockNumbers>
      <Colon>:</Colon>
      <ClockNumbers>{String(minutes).padStart(2, "0")}</ClockNumbers>
      <Colon>:</Colon>
      <ClockNumbers>{String(seconds).padStart(2, "0")}</ClockNumbers>
    </TimeContainer>
  );
};
