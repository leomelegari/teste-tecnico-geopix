import styled from "styled-components";

interface Props {
  top: number;
  left: number;
}

export const BallContainer = styled.div`
  width: 500px;
  height: 500px;
`;

export const Ball = styled.div<Props>`
  width: 25px;
  height: 25px;
  border-radius: 999999px;
  background-color: red;
  margin-top: ${(props) => `${props.top}px`};
  margin-left: ${(props) => `${props.left}px`};
  transition: 1s;
`;
