import { useState } from "react";
import { ClockNumbers, Colon, TimeContainer } from "./styles";

export const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  setInterval(() => {
    const date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  }, 1000);

  return (
    <TimeContainer>
      <ClockNumbers>{String(hours).padStart(2, "0")}</ClockNumbers>
      <Colon>:</Colon>
      <ClockNumbers>{String(minutes).padStart(2, "0")}</ClockNumbers>
      <Colon>:</Colon>
      <ClockNumbers>{String(seconds).padStart(2, "0")}</ClockNumbers>
    </TimeContainer>
  );
};
